/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental:{
		appDir:true
	},
	images: {
		deviceSizes: [640, 768, 1024, 1280],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/victorrik-1.appspot.com/o/**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig 