/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/how-to-install',
        destination: 'https://youtu.be/BpUZhMOAo04',
        permanent: false
      },
      {
        source: '/legal/privacy-policy',
        destination: 'https://privacy.pearos.xyz',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
