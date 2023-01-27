module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      formats: ['image/webp'],
    },
    experimental: {
      fontLoaders: [
        { loader: '@next/font/google', options: { subsets: ['latin'] } },
      ],
    },
  }
  return nextConfig
}