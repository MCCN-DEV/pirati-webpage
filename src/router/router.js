import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import ParagraphPage from '../pages/ParagraphPage.vue';  
import AlbumInfo from '../pages/AlbumInfo.vue';
import GalleryPage from '../pages/GalleryPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/paragraph/:id', name: 'ParagraphPage', component: ParagraphPage },  
  { path: '/album/:album', name: 'AlbumInfo', component: AlbumInfo, props: true },
  { path: '/gallery', name: 'GalleryPage', component: GalleryPage, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
