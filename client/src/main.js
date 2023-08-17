
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

if (localStorage['jwtToken']) {
    const tokenParts = localStorage['jwtToken'].split('.')
    if (tokenParts.length === 3) {
        const tokenPayload = JSON.parse(atob(tokenParts[1]));
        const role = tokenPayload.user.role; // Adjust the path based on your token structure
        // Dispatch the login action with roles
        store.dispatch('login', role);
    }
}
app.use(router)
app.use(store)

app.mount('#app')