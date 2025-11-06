import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './components/yike-design-ui/index.less'
import ykui from "./components/yike-design-ui";
import Icon from "./components/yike-design-ui/components/svg-icon"
import './style.less'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia).use(ykui).use(Icon).use(router).mount('#app')
