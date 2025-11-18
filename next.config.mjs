/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: ['127.0.0.1', 'localhost', 'skybuy.nesa.one'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'skybuy.nesa.one',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/shop/product/:id",   
        destination: "/product/:id",   
        permanent: true,              
      },
    ];
  },
};

export default nextConfig;
