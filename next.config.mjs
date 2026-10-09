/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.CLOUDFLARE_EXPORT === '1' ? { output: 'export' } : {}),
  reactStrictMode: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
  agentRules: false,
};

export default nextConfig;
