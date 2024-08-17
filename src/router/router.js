import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import ParagraphPage from '../pages/ParagraphPage.vue';  // Import the new component

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/paragraph/:id', name: 'ParagraphPage', component: ParagraphPage }  // New route for paragraphs
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
