import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './vuetify';  // Import de l'instance Vuetify
import router from './router';    // Import du routeur 
import 'vuetify/styles';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.use(router);    // Utilisation du routeur
app.use(vuetify);   // Utilisation de Vuetify
app.mount('#app');
