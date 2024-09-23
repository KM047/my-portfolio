/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: ["images.unsplash.com", "unsplash.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "api.microlink.io",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
