/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_URL_API_LOCAL: "http://192.168.100.7:3001",
    REACT_URL_LOCAL: "http://192.168.100.7",
    REACT_URL_API_REMOTE: "https://api-piguavesoft.onrender.com",
  },
};

module.exports = nextConfig;
