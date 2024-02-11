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
        {
          key: "Access-Control-Allow-Methods",
          value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        },
        {
          key: "Access-Control-Allow-Headers",
          value: "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept",
        },
        {
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
      ]
    }, ];
  }

};



export default config;