import * as dotenv from 'dotenv';
dotenv.config();

const envVariables = {
    HARPERDB_KEY: process.env.NEXT_PUBLIC_HARPERDB_KEY ?? '',
    EMAIL_USER_ID: process.env.EMAIL_USER_ID ?? '',
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID ?? '',
    EMAIL_TEMPLATE_ID: process.env.EMAIL_SERVICE_ID ?? '',
}

export default envVariables;