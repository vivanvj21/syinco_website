import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isExport ? "export" : "standalone",
  trailingSlash: false,
  images: {
    unoptimized: isExport,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  ...(isExport
    ? {}
    : {
        async redirects() {
          return [
            {
              source: "/request-a-quote",
              destination: "/contact-us",
              permanent: true,
            },
          ];
        },
      }),
};

export default nextConfig;
