import { NuxtOptionsHead } from "@nuxt/types/config/head"

const head: NuxtOptionsHead = {
	title: process.env.APP_NAME,
	titleTemplate: "%s - " + process.env.APP_NAME,
    htmlAttrs: {
        lang: "fr"
    },
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=0.8" },
        { name: "format-detection", content: "telephone=no" },

		{ hid: "og:site_name", name: "og:site_name", content: process.env.APP_NAME || "default" },
		{ hid: "og:type", name: "og:type", content: "website" },
		{ hid: "og:title", name: "og:title", content: "", template: chunk => `${chunk}`, },

        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },

        { hid: "theme-color", name: "theme-color", content: "#2068D5" },
    ],
    link: [
        { rel: "icon", type: "image/x-icon", href: "/icon.png" },
        { rel: "stylesheet", href: "/fontawesome/css/all.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" },
    ]
}

export default head
