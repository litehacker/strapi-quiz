module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://sinavhukuk.com/api',
  admin: {
    url: 'https://sinavhukuk.com/dashboard',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7239e56bb2e4911a109fe31cbff59198'),
    },
  },
});
