import type { NextConfig } from "next";

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/agendamento',
                destination: '/agendamento/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
