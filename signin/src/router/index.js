import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from '../views/UserRegister.vue';
import UserTerms from "@/views/UserTerms.vue";
const routes = [
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister,
  },

  {
    path: "/UserTerms",
    name: "UserTerms",
    component: UserTerms,
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});






export default router;