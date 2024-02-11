/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "avatar.vercel.sh",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};



export default config;