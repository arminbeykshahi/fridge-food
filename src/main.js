import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import router from './router.js'


const app = createApp(App)
app.use(router)
app.mount('#app')
