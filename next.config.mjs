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
    return [{
      source: "/(.*)",
      headers: [{
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ]
    }, ];
  }

};



export default config;