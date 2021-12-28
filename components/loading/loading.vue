<template>
    <div v-if="loading" class="loading-page">
        <div class="loading"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator"

@Component
export default class Loading extends Vue {

    loading = false

    start() {
        this.loading = true
    }
    finish() {
        this.loading = false
    }

    @Watch('loading')
    overflow() {
        const body = document.getElementsByTagName('body')[0];
        this.loading ? body.classList.add("overflow-hidden") : body.classList.remove("overflow-hidden")
    }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
