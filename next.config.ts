// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  typescript: {
    // Setel ini ke true HANYA jika kamu mau ignore error TS saat build
    ignoreBuildErrors: false, 
  },
};