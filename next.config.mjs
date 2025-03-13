/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  assetPrefix: "/blogs",
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "tirzepatyd.store", 
          },
        ],
      },
};

export default nextConfig;
