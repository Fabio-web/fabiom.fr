<template>
    <h1 v-if="size >= 20" :class="['title', 'title-'+size]"><slot/></h1>
    <h2 v-else :class="['title', 'title-'+size]"><slot/></h2>
</template>

<style scoped lang="scss">
@import "style";
</style>

<script lang="ts">
import { Prop, Vue, Component } from "nuxt-property-decorator"

@Component
export default class Title extends Vue {

    @Prop({type: Number, default: 18}) size?: number

}
</script>
