/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'szitjksnkskfwbckrzfc.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/articleimages/**',
          },
        ],
      },
};

module.exports = nextConfig;
