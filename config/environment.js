module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || '8080',
    DATABASE_URL: process.env.DATABASE_URL || '',
    BASE_URL: process.env.BASE_URL || '/'
}