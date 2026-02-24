import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'devwordpressspace.site' }],
        destination: 'https://devwordpressspace.site/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
