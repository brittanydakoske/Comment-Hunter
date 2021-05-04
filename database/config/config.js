require('dotenv').config()

module.exports = {
    development: {
        url: process.env.DEV_DATABASE_URI,
        dialect: 'postgres',
        "dialectOptions": {
            "ssl": { "rejectUnauthorized": false }
        },
    },
    test: {
        url: process.env.TEST_DATABASE_URI,
        dialect: 'postgres',
        "dialectOptions": {
            "ssl": { "rejectUnauthorized": false }
        },
    },
    production: {
        url: process.env.DATABASE_URL.replace("://", "ql://", 1),
        dialect: 'postgres',
        "dialectOptions": {
            "ssl": { "rejectUnauthorized": false }
        },
    },
}
