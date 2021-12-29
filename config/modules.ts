import { NuxtOptionsModule } from "@nuxt/types/config/module"

const modules: NuxtOptionsModule[] = [
    '@nuxtjs/dotenv',
	['vue-scrollto/nuxt', { duration: 300 }],
]

export default modules
