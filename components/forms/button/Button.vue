<template>
	<div
		:class="{
			[right ? 'btn-right' : '']: true,
			[center ? 'btn-center' : '']: true,
			[reverse ? 'btn-reverse' : '']: true,
			[secondary ? 'btn-secondary' : '']: true,
			[important ? 'btn-important' : '']: true,
			[small ? 'btn-small' : '']: true,
			btn: true,
		}"
	>
		<button :disabled="disabled" :type="type"><slot /></button>
	</div>
</template>

<style scoped lang="scss">
@import 'style';
</style>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component
export default class Button extends Vue {

	@Prop({ type: String, default: 'button' }) type!: string
	@Prop({ type: Boolean, default: false }) right!: boolean
	@Prop({ type: Boolean, default: false }) center!: boolean
	@Prop({ type: Boolean, default: false }) disabled!: boolean
	@Prop({ type: Boolean, default: false }) reverse!: boolean
	@Prop({ type: Boolean, default: false }) secondary!: boolean
	@Prop({ type: Boolean, default: false }) important!: boolean
	@Prop({ type: Boolean, default: false }) small!: boolean

}
</script>
