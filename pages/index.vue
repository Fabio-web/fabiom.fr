<template>
	<div class="home">
		<Title :size="48">Hello World !</Title>
	</div>
</template>

<style lang="scss">
@import "~/assets/scss/pages/home";
</style>

<script lang="ts">
import { NuxtOptionsHead } from '@nuxt/types/config/head'
import { Component, Vue } from 'nuxt-property-decorator'
import HeadUtils from "~/utils/HeadUtils"
import Button from "~/components/forms/button/Button.vue"
import Title from "~/components/utils/title/title.vue"
import Alert from "~/components/errors/alert/Alert.vue"

@Component({
	components: { Alert, Button, Title },
})
export default class Home extends Vue {

	headConfig: NuxtOptionsHead = {}

	async asyncData() {

		const headConfig = HeadUtils.setHead({
			title: "Home"
		})

		return {headConfig}

	}

	head() {
		return this.headConfig
	}
}
</script>
