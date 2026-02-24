import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'devwordpressspace.site' }, // non-www
          { type: 'host', value: 'http://devwordpressspace.site' }, // optional
        ],
        destination: 'https://www.devwordpressspace.site/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
