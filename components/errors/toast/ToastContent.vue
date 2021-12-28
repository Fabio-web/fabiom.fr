<template>
    <transition name="fade-slide" appear>
        <div class="toast" v-if="show">
            <div class="content">
                <Alert :content="content" :type="type"></Alert>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
@import "style";
</style>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "nuxt-property-decorator"
import Alert from "../alert/Alert.vue"


@Component({
	components: {Alert}
})
export default class ToastContent extends Vue {

    @Prop({type: String}) content!: string
    @Prop({type: String}) type!: string
    @Prop({type: Boolean, default: false}) waiting!: boolean

    show = true

    mounted() {
        this.hide()
    }

	@Watch('waiting')
    hide() {
		this.show = true
		if(!this.waiting) setTimeout(() => this.show = !this.show, 4000)
	}

}
</script>
