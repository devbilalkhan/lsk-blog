// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js'],
  },
}
