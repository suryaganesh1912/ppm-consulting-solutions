import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ppmconsultingsolutions.example.com"; // Configurable production domain

    const routes = [
        "",
        "/about",
        "/services",
        "/oracle-ppm",
        "/industries",
        "/case-studies",
        "/careers",
        "/contact",
        "/privacy",
        "/terms",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1.0 : route.startsWith("/services") || route.startsWith("/oracle-ppm") ? 0.9 : 0.8,
    }));
}
