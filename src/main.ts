// Global
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

// Vue imports and use libraries
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

// App import
import App from './App.vue'

library.add(far)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.component('fa', FontAwesomeIcon).mount('#app')