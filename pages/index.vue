<template>
	<div class="home">
		<div class="sides">
			<div class="side photo">
				<div class="content">
					<img src="~/assets/img/profile.png" alt="fabiom profile photo">
				</div>
			</div>
			<div class="side socials">
				<div class="content" v-if="data.socials">
					<a v-for="d in data.socials" :key="d.name" target="_blank" :href="d.link" ref="noopener" class="row"><i :class="d.icon"></i> <span>{{ d.name }}</span></a>
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
			<div class="categories">
				<section class="project" id="projects">
					<div class="name">Project</div>
					<div class="list" v-if="data.projects">
						<div class="item" v-for="p in data.projects" :key="p.title">
							<a target="_blank" :href="p.link" class="head">
								<img :src="require('~/assets/img/projects/'+p.image)" :alt="'project icon ' + p.title">
								<div class="name">{{ p.title }}</div>
							</a>
							<div class="tags">
								<div v-for="tag in p.tags" :key="p.title+tag">{{ tag }}</div>
							</div>
						</div>
					</div>
				</section>
				<section class="skills" id="skills">
					<div class="name">Skills</div>
					<div class="sub-cat" v-for="(skills, name) in data.skills">
						<div class="name">{{ name }}</div>
						<div class="list">
							<div class="item" v-for="skill in skills" :key="skill">
								<Tooltips :content="skill">
									<img :src="require('~/assets/img/skills/'+skill+'.png')" :alt="'fabiom skill '+skill">
								</Tooltips>
							</div>
						</div>
					</div>
				</section>
				<section class="hobbies" id="hobbies">
					<div class="name">Hobbies</div>
					<div class="list">
						<div class="item" v-for="hobbie in data.hobbies">
							<i :class="hobbie.icon"></i>
							{{ hobbie.name }}
						</div>
					</div>
				</section>
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
import { socials } from "~/data/socials"
import { projects } from "~/data/projects"
import { skills } from "~/data/skills"
import Tooltips from "~/components/utils/tooltips/tooltips.vue"
import { hobbies } from "~/data/hobbies"

@Component({
	components: { Tooltips },
})
export default class Home extends Vue {

	headConfig: NuxtOptionsHead = {}
	data = {}

	async asyncData() {

		const data = {
			socials: socials,
			projects: projects,
			skills: skills,
			hobbies: hobbies
		}

		return {data}

	}
}
</script>
