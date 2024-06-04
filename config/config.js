const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=false`;

const ENCRYPTION_KEY = 'c6aSsUzQBACrdWoWy6g7BkuxwKfkPbmB'
const APP_BASE_URL = process.env.APP_BASE_URL;
const PROJECT = process.env.PROJECT;
const SAAS_AUTH_SERVICE_BASE_URL = process.env.SAAS_AUTH_SERVICE_BASE_URL;
const NOTIFICATION_SERVICE_BASE_URL = process.env.NOTIFICATION_SERVICE_BASE_URL

//###################Email alert Config###########################
const EMAIL_HOST = process.env.EMAIL_HOST
const ALERT_EMAIL_USERNAME = process.env.ALERT_EMAIL_USERNAME
const ALERT_EMAIL_PASSWORD = process.eventNames.ALERT_EMAIL_PASSWORD
const ALERT_EMAIL_FROM = process.env.ALERT_EMAIL_FROM
const ALERT_EMAIL_SENDER_NAME = process.env.ALERT_EMAIL_SENDER_NAME
const DEVELOPER_SETUP = process.env.DEVELOPER_SETUP
//###################################################################

//##############################REDIS CONF#####################################
const REDIS_PORT = process.env.REDIS_PORT
const REDIS_IP = process.env.REDIS_IP
const REDIS_PASSWORD = process.env.REDIS_PASSWORD
const APP_PORT = process.env.APP_PORT
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    DB_NAME,
    DB_HOST,
    DB_PORT,
    // ABSOLUTE_PATH,
    DB_URL,
    ENCRYPTION_KEY,
    APP_BASE_URL,
    PROJECT,
    SAAS_AUTH_SERVICE_BASE_URL,
    EMAIL_HOST,
    ALERT_EMAIL_USERNAME,
    ALERT_EMAIL_PASSWORD,
    ALERT_EMAIL_FROM,
    ALERT_EMAIL_SENDER_NAME,
    NOTIFICATION_SERVICE_BASE_URL,
    DEVELOPER_SETUP,
    REDIS_IP,
    REDIS_PORT,
    REDIS_PASSWORD,
    APP_PORT,
    JWT_SECRET
}