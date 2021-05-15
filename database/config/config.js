require('dotenv').config()

module.exports = {
    development: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
        "dialectOptions": {
            "ssl": { "rejectUnauthorized": false }
        },
    },
    test: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
        "dialectOptions": {
            "ssl": { "rejectUnauthorized": false }
        },
    },
    production: {
        // uncomment before deploy on heroku
        // url: process.env.DATABASE_URL.replace("://", "ql://", 1),
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
        "dialectOptions": {
            "ssl": { "rejectUnauthorized": false }
        },
    },
}
