<template>
	<div>
		<Header/>
		<Nuxt id="content"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Header from "~/components/layouts/header/header.vue"

@Component({
	components: { Header },
})
export default class Default extends Vue {}
</script>
