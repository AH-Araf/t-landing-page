import { defaultDescription, siteName, siteUrl } from "@/lib/site";

export default function manifest() {
  return {
    name: siteName,
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1a",
    theme_color: "#ff6b00",
    lang: "en-BD",
    scope: "/",
    id: siteUrl,
    categories: ["sports", "lifestyle"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
        purpose: "any",
      },
    ],
  };
}
