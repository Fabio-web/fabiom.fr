import { NuxtOptionsHead } from "@nuxt/types/config/head"

class HeadUtils {

    setHead(head: { title: string, description?: string, image?: string }): NuxtOptionsHead {

        const default_description = "Hi, I’m Fabio 👋\nBased in Toulouse, France\ni’m web & application developer"
        const default_image = "/card.png"

        return {
            title: head.title,
            meta: [
                { hid: "og:title", name: "og:title", content: head.title },

                {
                    hid: "description",
                    name: "description",
                    content: head.hasOwnProperty("description") && typeof head.description !== "undefined" ? head.description : default_description,
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: head.hasOwnProperty("description") && typeof head.description !== "undefined" ? head.description : default_description,
                },

                {
                    hid: "og:image",
                    name: "og:image",
                    content: head.hasOwnProperty("image") && typeof head.image !== "undefined" ? head.image : default_image,
                },
                {
                    hid: "twitter:image",
                    name: "twitter:image",
                    content: head.hasOwnProperty("image") && typeof head.image !== "undefined" ? head.image : default_image,
                },

            ],
        }

    }

}

export default new HeadUtils()
