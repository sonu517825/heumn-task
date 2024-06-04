require('dotenv').config();

const validateEnvFile = async () => {

    const requiredKeys = ['APP_PORT', 'DB_NAME', 'DB_HOST', 'DB_PORT', 'JWT_SECRET'];
    const envKeys = Object.keys(process.env);
    const missingKeys = requiredKeys.filter(key => !envKeys.includes(key));

    if (missingKeys.length > 0) {
        console.error('Error: Missing required keys in the environment file:', missingKeys.join(', '));
        process.exit(1);
    }

    const log = requiredKeys.reduce((acc, curr) => {
        acc[curr] = process.env[curr]
        return acc
    }, {})

    console.log('\n')
    console.table(log);

    return true

}

module.exports = {
    validateEnvFile
}
