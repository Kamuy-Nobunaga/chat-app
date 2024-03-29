import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/ChatroomView.vue')
  },
  {
    path: '/chat-app/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }, 
  {
    path: '/chat-app/chat', 
    name: 'chat', 
    component: () => import('../views/ChatView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
