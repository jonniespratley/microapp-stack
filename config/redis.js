module.exports = {
  connection: 'local',

  local: {
    host: 'localhost',
    port: 6379
  },

  secondary: {
    host: 'myhost.com',
    port: 6379
  }
}