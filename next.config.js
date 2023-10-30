/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cybersoft.edu.vn',
                port: '',
            }, {
                protocol: 'https',
                hostname: 'apicrm.cybersoft.edu.vn',
                port: '',
            }
        ],
    },
}

module.exports = nextConfig
