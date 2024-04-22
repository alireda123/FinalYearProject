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
      typescript: {
        // !! WARN !! // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
      },
};

module.exports = nextConfig;
