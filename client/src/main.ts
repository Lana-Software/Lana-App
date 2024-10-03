import { createPinia } from "pinia";
// Global
import { createApp } from "vue";
import "./style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
// Vue imports and use libraries
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// App import
import App from "./App.vue";

library.add(far);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component("fa", FontAwesomeIcon).mount("#app");
