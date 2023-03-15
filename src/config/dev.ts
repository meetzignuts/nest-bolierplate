import { Config } from '../config.module';
require('dotenv').config();

export const dev = (): Config => ({
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY,
        tokenExpiry: process.env.JWT_TOKEN_EXPIRY,
    },
    database: {
        endpoint: process.env.DATABASE_URL,
    }
});
