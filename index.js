import Vue from 'vue/dist/vue.common.js'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.use(VueReCaptcha, { siteKey: '6LfhYnsUAAAAAJdYzJ37YXN8RMMNuGtVoeRt54Xf' })

new Vue({
	el: '#app',
	data: {
		processing: false,
	},
  methods: {
    async getRecaptchas() {
			if (this.processing) {
				return
			}
			this.processing = true
			try {
				await Promise.all([...Array(20).keys()].map(() => this.$recaptcha('/upload')))
			} catch(e) {
			}
			this.processing = false
      
    }
  },
  template: '<button :disabled="processing" @click="getRecaptchas()">get 20 recaptchas</button>'
})