import webpack from "webpack"
import { NuxtOptionsBuild } from "@nuxt/types/config/build"

const build: NuxtOptionsBuild = {
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
}

export default build
