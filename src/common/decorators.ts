import { Body, createParamDecorator, Query, Param, ExecutionContext } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { ValidationPipe } from './validation.pipe';

/**
 * Parameter decorator used to enable model validation
 * @example
 * ```
 * async addItem(@BodyValidator(AddItemDto) auth: AddItemDto): Promise<any> { }
 * ```
 */
export const BodyValidator = <T extends object>(classType, whitelist = true): ParameterDecorator => {
    return (target: object, key?: any, index?: number) => {
        return Body(new ValidationPipe(classType, whitelist))(target, key, index);
    };
};

/**
 * Parameter decorator used to enable model validation
 * @example
 * ```
 * async addItem(@QueryValidator(AddItemDto) auth: AddItemDto): Promise<any> { }
 * ```
 */
export const QueryValidator = <T extends object>(classType, whitelist = true): ParameterDecorator => {
    return (target: object, key?: any, index?: number) => {
        return Query(new ValidationPipe(classType, whitelist))(target, key, index);
    };
};

/**
 * Parameter decorator used to enable model validation
 * @example
 * ```
 * async addItem(@ParamValidator(AddItemDto) auth: AddItemDto): Promise<any> { }
 * ```
 */
export const ParamValidator = <T extends object>(classType, whitelist = true): ParameterDecorator => {
    return (target: object, key?: any, index?: number) => {
        return Param(new ValidationPipe(classType, whitelist))(target, key, index);
    };
};

export const ApiFile =
    (fileName = 'file'): MethodDecorator =>
    (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        ApiBody({
            schema: {
                type: 'object',
                properties: {
                    [fileName]: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        })(target, propertyKey, descriptor);
    };
