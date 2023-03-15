import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';

@Injectable()
export class ValidationPipe<T extends object> implements PipeTransform<T> {
    classType: any;
    whitelist: boolean;
    constructor(classType, whitelist = true) {
        this.classType = classType;
        this.whitelist = whitelist;
    }
    async transform(value: T, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException('No data submitted');
        }
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        try {
            return await transformAndValidate(this.classType, value, { validator: { whitelist: this.whitelist } });
        } catch (err) {
            if (Array.isArray(err) && err.length > 0 && err[0] instanceof ValidationError) {
                throw new BadRequestException({
                    message: 'Input data validation failed',
                    errors: this.buildError(err),
                });
            } else {
                throw err;
            }
        }
    }

    private buildError(errors: ValidationError[]): any {
        const result: any = {};
        errors.forEach((err) => {
            const prop: string = err.property;
            if (err.constraints) {
                Object.keys(err.constraints).forEach((key: string) => {
                    result[`${prop}.${key}`] = err.constraints[key];
                });
            }
            if (err.children) {
                result[`${err.property}`] = this.buildError(err.children);
            }
        });
        return result;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
}
