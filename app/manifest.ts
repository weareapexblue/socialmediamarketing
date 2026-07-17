import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "SMM.VIP",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8fbff",
    theme_color: "#1d73c8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
