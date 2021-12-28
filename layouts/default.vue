<template>
	<div class="container">
		<Toast bottom/>
		<Nuxt id="content"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Toast from "~/components/errors/toast/Toast.vue"

@Component({
	components: { Toast },
})
export default class Default extends Vue {



}
</script>
