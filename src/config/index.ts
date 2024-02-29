export default () => ({
  database: {
    host: process.env.DB_HOST || '',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    ssl: Boolean(parseInt(process.env.SSL_CONNECTION, 10)),
    synchronize: Boolean(parseInt(process.env.DB_SYNCHRONIZE, 10)),
  },
});
