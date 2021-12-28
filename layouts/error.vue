<template>
    <div class="container m-top">
        <div class="error_page">
            <div class="content">
                <h1 v-if="error.statusCode === 404 || /\/404/.test($route.path)">Oops, on dirait que tu t’es égaré...</h1>
                <h1 v-else-if="error.statusCode === 401 || /\/401/.test($route.path)">On dirait que tu viens de te faire refuser l'accès ...</h1>
                <h1 v-else>Une erreur est survenue</h1>
                <a @click="back()"><Button type="button">Retourner en arrière</Button></a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "~/assets/scss/pages/notfound";
</style>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import Button from "~/components/forms/button/Button.vue"

@Component({
	components: { Button },
})
export default class Error extends Vue {

    @Prop() error!: {statusCode: number}

    layout = 'error'

    back() {
		window.history.length > 2 && !/^\/40/.test(this.$route.path) ? this.$router.go(-1) : this.$router.push('/')
	}
}
</script>
