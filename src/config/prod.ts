import { Config } from '../config.module';
require('dotenv').config();

export const prod = async (): Promise<Config> => {
    
    return {
        jwt: {
            secretKey: process.env.JWT_SECRET_KEY,
            tokenExpiry: process.env.JWT_TOKEN_EXPIRY,
        },
        database: {
            endpoint: process.env.DATABASE_URL,
        }
    };
};
