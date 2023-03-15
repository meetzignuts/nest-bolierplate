import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Init1659898506072 } from 'migrations/1659898506072-Init';

const parseDbUrl = require('parse-database-url');

// Make sure environment variables are loaded before using ConfigService
config();

const configService = new ConfigService();
const dbConfig = parseDbUrl(configService.get('DATABASE_URL'));

export default new DataSource({
    database: dbConfig.database,
    host: dbConfig.host,
    username: dbConfig.user,
    password: dbConfig.password,
    type: dbConfig.driver,
    entities: [
       
    ],
    migrations: [Init1659898506072],
});
