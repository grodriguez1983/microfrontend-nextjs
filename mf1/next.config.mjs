/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: "/:path*",
        source: "/:path*",
      },
      {
          source: "/mf2/_next/webpack-hmr",
        destination: `http://localhost:3001/mf2/_next/webpack-hmr`,
        locale: false,
      },
      {
          source: "/mf2/:path*",
        destination: 'http://localhost:3001' + "/mf2/:path*",
      },
      {
          source: "/mf3/_next/webpack-hmr",
        destination: `http://localhost:3002/mf3/_next/webpack-hmr`,
        locale: false,
      },
      {
          source: "/mf3/:path*",
        destination: 'http://localhost:3002' + "/mf3/:path*",
      },
    ];
  },
  transpilePackages: ["beacon-ui", "shared", "tailwind-config"],
};

export default nextConfig;
