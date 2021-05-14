import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/client/:clientId/dashboard',
    name: 'ClientDashboard',
    component: () => import(/* webpackChunkName: "client" */ '../views/ClientDashboard.vue'),
  },
  {
    path: '/landmanprofile',
    name: 'LandmanProfile',
    component: () => import(/* webpackChunkName: "landman" */ '../views/LandmanProfile.vue'),
  },
  {
    path: '/addproject',
    name: 'AddProject',
    component: () => import(/* webpackChunkName: "client" */ '../views/AddProject.vue'),
  },
  {
    path: '/addclient',
    name: 'AddClient',
    component: () => import(/* webpackChunkName: "client" */ '../views/AddClient.vue'),
  },
  {
    path: '/addrecord',
    name: 'AddRecord',
    component: () => import(/* webpackChunkName: "landman" */ '../views/AddRecord.vue'),
  },
  {
    path: '/addprospect',
    name: 'AddProspect',
    component: () => import(/* webpackChunkName: "landman" */ '../views/AddProspect.vue'),
  },
  {
    path: '/landmandashboard',
    name: 'LandmanDashboard',
    component: () => import(/* webpackChunkName: "landman" */ '../views/LandmanDashboard.vue'),
  },
  {
    path: '/addlegaldescription',
    name: 'AddLegalDescription',
    component: () => import(/* webpackChunkName: "landman" */ '../views/AddLegalDescription.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
