import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Force files served from /downloads to be downloaded instead of opened inline
        source: "/downloads/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
