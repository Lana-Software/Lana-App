// Global
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

// Vue imports and use libraries
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Router import
import router from './router'

// App import
import App from './App.vue'

const pinia = createPinia()

library.add(far, fas, fab)

const app = createApp(App)

app
.use(pinia)
.component('fa', FontAwesomeIcon)
.use(router)
.mount('#app')
