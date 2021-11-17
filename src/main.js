import { createApp } from 'vue'
import App from './App.vue'
import {Message} from '@/config/language.js'
import {language} from '@/config/index.js'
import store from '@/store/index.js'
/*element-plus支持vue3x*/
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale'
// 路由拦截检查
import  './inspect.js'

import router from '@/router/index.js'
locale.use(language == 'cn' ? Message.cn :Message.en)

const app = createApp(App)
app.use(ElementPlus,{locale})
app.use(router)
app.use(store)
app.mount('#app')
