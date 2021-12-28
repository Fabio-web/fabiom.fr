<template>
	<div class="toasts" :class="{
		[bottom ? 'toasts-bottom' : '']: true,
	}">
		<component
			is="ToastContent"
			v-for="(error, key) in errors"
			:key="key"
			:waiting="waiting"
			:content="error.content"
			:type="error.type"
		></component>
	</div>
</template>

<style lang="scss">
@import "style";
</style>

<script lang="ts">

import { Component, Prop, Vue } from "nuxt-property-decorator"
import ToastContent from "./ToastContent.vue"


@Component({
	components: {ToastContent}
})
export default class Toast extends Vue {

	@Prop({ default: false, type: Boolean }) bottom!: boolean

	errors: Array<{ content: string, type?: string }> = []
	waiting = false

	created() {
		this.$nuxt.$on("toast", this.addErrors)
	}

	addErrors(value: { content: string, type?: string }) {

		if (value.type == 'waiting' && !this.waiting) {
			this.waiting = true
			this.errors = [value]
		} else if (this.waiting) {
			if (value.type == 'waiting') return
			this.waiting = false
			this.errors[this.errors.length - 1] = value
		} else {
			this.errors.push(value)
			if(value.type !== "warning") setTimeout(() => this.errors.shift(), 5000)
		}
	}

}
</script>
