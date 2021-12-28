<template>
    <div>
        <div v-if="Object.values(multiple).length === 0 && (typeof content != 'undefined' && (content !== '')) || type === 'waiting'" :class="type"
             v-html="getIcon() + (type === 'waiting' ? (typeof content != 'undefined' && content !== '' ? content : 'Waiting please ...') : content)"></div>

        <div v-else-if="multiple.length !== 0" :class="type" class="alert-list">
            <span v-html="getIcon()"></span>
            <ul>
                <li v-for="(error, key) in multiple" :key="key" v-html="error"></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"


@Component
export default class Alert extends Vue {

	@Prop({default: "danger", type: String}) type!: string
	@Prop({default: "", type: String}) content!: string
	@Prop({default: () => [], type: Array}) multiple!: string[]

	getIcon() {
		switch (this.type) {
			case "danger":
				return "<i class=\"fas fa-times\"></i> "
			case "success":
				return "<i class=\"fas fa-check\"></i> "
			case "waiting":
				return "<i class=\"fas fa-circle-notch fa-spin\"></i> "
			case "warning":
				return "<i class=\"fas fa-exclamation-triangle\"></i> "
			case "info":
				return "<i class=\"fas fa-info\"></i> "
			default:
				this.type = "danger"
				return "<i class=\"fas fa-times\"></i> "
		}
	}

}
</script>
