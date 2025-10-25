/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  env: {
    // Make environment variables available to the client
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_FORMATTER_FRONTEND_URL: process.env.NEXT_PUBLIC_FORMATTER_FRONTEND_URL,
    NEXT_PUBLIC_FORMATTER_BACKEND_URL: process.env.NEXT_PUBLIC_FORMATTER_BACKEND_URL,
  }
}

module.exports = nextConfig