const result = require('dotenv').config({ path: '.env.local' })

const nextConfig = {
  env: result.parsed,
  transpilePackages: ['@dfns/sdk-browser'],
}

module.exports = nextConfig
