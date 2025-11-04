/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['127.0.0.1', 'localhost', 'your-production-domain.com'], 
  },
  async redirects() {
    return [
      {
        source: '/shop/product/:id',
        destination: '/product/:id',
        permanent: true, // or false if temporary
      },
    ]
  },
};

export default nextConfig;
