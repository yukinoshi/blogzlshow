import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './components/yike-design-ui/index.less'
import ykui from "./components/yike-design-ui";
import Icon from "./components/yike-design-ui/components/svg-icon"
import './style.less'
createApp(App).use(ykui).use(Icon).use(router).mount('#app')
