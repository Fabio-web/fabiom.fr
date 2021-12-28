<template>
    <client-only>
        <div class="tooltips">
            <div class="hover"><slot/></div>
            <div class="tooltips-content" v-html="content"></div>
        </div>
    </client-only>
</template>

<style scoped lang="scss">
@import "style";
</style>

<script lang="ts">
import { Prop, Vue, Component } from "nuxt-property-decorator"

@Component
export default class Tooltips extends Vue {

    @Prop({type: String}) content?: string

}
</script>
