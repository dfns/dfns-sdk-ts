const dotenv = require('dotenv')

const nextConfig = {
  env: {
    ...dotenv.config({ path: '.env' }).parsed,
    ...dotenv.config({ path: '.env.local' }).parsed,
  },
  transpilePackages: ['@dfns/sdk-browser'],
}

module.exports = nextConfig
