import { Global, Module } from '@nestjs/common';

export const Configuration = 'Config';

@Global()
@Module({
    providers: [
        {
            provide: Configuration,
            useFactory: () => (global as any).config,
        },
    ],
    exports: [Configuration],
})
export class ConfigModule {}

export interface Config {
    jwt: {
        secretKey: string;
        tokenExpiry: string;
    };
    database: {
        endpoint: string;
    };
}
