import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import DashBoard from './components/DashBoard.vue';
import './assets/tailwind.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createPinia } from 'pinia';
import PortalPage from './components/PortalPage.vue'
import InfoPortal from './components/InfoPortal.vue';
import AdminPage from './components/AdminPage.vue'

const pinia = createPinia();
const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/home',name:"Home", component: HomePage },
        { path: '/dashboard',name:"Dashboard", component: DashBoard },
        { path: '/',name:"LoginPage", component: PortalPage },
        { path: '/portal',name:"PortalPage", component: InfoPortal },
        { path: '/admin',name:"AdminPage", component: AdminPage },
        
    ]
});

createApp(App).use(pinia)  
    .use(router)  
    .mount('#app');
