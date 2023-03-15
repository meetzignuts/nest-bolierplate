import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                console.log(configService);
                return {
                    url: configService.get<string>('database.endpoint'),
                    type: 'mysql',
                    autoLoadEntities: true,
                    entities: [
                        
                    ],
                    synchronize: false,
                };
            },
        }),
    ],
})
export class DbModule {
    constructor() {
        // Logger.log(
        //   `Use config: ${JSON.stringify({
        //     name: config.db.name,
        //     type: config.db.type,
        //     host: config.db.host,
        //     port: config.db.port,
        //     database: config.db.database,
        //   })}`,
        //   "DBModule"
        // );
    }
}
