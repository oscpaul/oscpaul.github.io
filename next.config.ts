import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',       // all paths
        has: [{ type: 'host', value: 'devwordpressspace.site' }], // optional, can remove if all domains
        destination: 'https://devwordpressspace.site/:path*',  // force HTTPS
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
