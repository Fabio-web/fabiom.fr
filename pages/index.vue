<template>
	<div class="home">
		<div class="sides">
			<div class="side photo">
				<div class="content">
					<img src="~/assets/img/profile.png" alt="fabiom profile photo">
				</div>
			</div>
			<div class="side socials">
				<div class="content">
					<a target="_blank" href="https://github.com/Fabio-web" ref="noopener" class="row"><i class="fab fa-github"></i> <span>Github</span></a>
					<a target="_blank" href="https://www.linkedin.com/in/fabiomaccotta/" ref="noopener" class="row"><i class="fab fa-linkedin"></i> <span>Linkedin</span></a>
					<a href="mailto:contact@fabiom.fr" ref="noopener" class="row"><i class="far fa-at"></i> <span>E-Mail</span></a>
				</div>
			</div>
		</div>
		<div class="presentation">
			<div class="introducing">
				<div class="head">
					<h1>Hi, <br>I’m Fabio <img src="https://e.unicode-table.com/orig/32/e70ddf12ec8dc727eb8c1e6f4a31dc.png" alt="signe de la main"></h1>
					<h2>Based in Toulouse, France <i class="fas fa-map-marker-alt"></i><br>i’m web & application developer</h2>
				</div>
				<p>
					Passionate about new technologies, more than 5 years ago, I decided to embark on computer programation as a self-taught.
					<br><br>
					For all my projects and missions, I invest myself to have a stable, optimized and scalable project. I know how to work as a team.				</p>
			</div>

		</div>
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
