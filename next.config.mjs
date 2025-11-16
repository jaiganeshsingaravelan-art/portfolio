/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- ADD THIS BLOCK ---
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // --- END OF BLOCK TO ADD ---
};

export default nextConfig;