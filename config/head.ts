import { NuxtOptionsHead } from "@nuxt/types/config/head"

const default_description = "Hi, I’m Fabio 👋\nBased in Toulouse, France\ni’m web & application developer"
const default_image = "/card.png"

const head: NuxtOptionsHead = {
	title: process.env.APP_NAME,
	titleTemplate: process.env.APP_NAME,
	htmlAttrs: {
		lang: "fr",
	},
	meta: [
		{ charset: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=0.8" },
		{ name: "format-detection", content: "telephone=no" },

		{ hid: "og:site_name", name: "og:site_name", content: process.env.APP_NAME || "default" },
		{ hid: "og:type", name: "og:type", content: "website" },
		{ hid: "og:title", name: "og:title", content: process.env.APP_NAME || "default" },
		{
			hid: "description",
			name: "description",
			content: default_description,
		},
		{
			hid: "og:description",
			name: "og:description",
			content: default_description,
		},

		{
			hid: "og:image",
			name: "og:image",
			content: default_image,
		},
		{
			hid: "twitter:image",
			name: "twitter:image",
			content: default_image,
		},

		{ hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },

		{ hid: "theme-color", name: "theme-color", content: "#212121" },
	],
	link: [
		{ rel: "icon", type: "image/x-icon", href: "/icon.png" },
		{ rel: "stylesheet", href: "/fontawesome/css/all.css" },
		{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap" },
		{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@600&display=swap" },
	],
}

export default head
