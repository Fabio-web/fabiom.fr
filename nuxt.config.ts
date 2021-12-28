import head from "./config/head"
import css from "./config/css"
import plugins from "./config/plugins"
import components from "./config/components"
import buildModules from "./config/buildModules"
import modules from "./config/modules"
import build from "./config/build"
import styleResources from "./config/styleResources"
import server from "./config/server"
import { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {

    dev: process.env.NODE_ENV !== "production",
    ssr: false,

	loading: '~/components/loading/loading.vue',

    head, css,
    plugins,
    components,
    buildModules,
    server,
    modules,
    build,
    styleResources
}

export default config
