module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mariadb'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'core'),
        username: env('DATABASE_USERNAME', 'siteinternet'),
        password: env('DATABASE_PASSWORD', 'password'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
