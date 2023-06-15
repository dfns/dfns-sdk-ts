const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
  plugins: [
    {
      plugin: require('craco-babel-loader'),
      options: {
        includes: [resolveApp('../../../sdk'), resolveApp('../../../sdk-webauthn-signer')],
      },
    },
  ],
}
