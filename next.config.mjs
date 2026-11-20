
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // Allow mobile/device access during development
  allowedDevOrigins: ["192.168.29.3"],

  // Allowed image optimization quality values
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
