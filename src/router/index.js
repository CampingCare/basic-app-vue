import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/widgets/booking-form',
      component: () => import('../views/widgets/BookingForm.vue')
    },
    {
      path: '/widgets/contact',
      component: () => import('../views/widgets/Contact.vue')
    },
    {
      path: '/widgets/contact-tab',
      component: () => import('../views/widgets/ContactTab.vue')
    },
    {
      path: '/widgets/dashboard',
      component: () => import('../views/widgets/Dashboard.vue')
    },
    {
      path: '/widgets/reservation',
      component: () => import('../views/widgets/Reservation.vue')
    },
    {
      path: '/widgets/reservation-tab',
      component: () => import('../views/widgets/ReservationTab.vue')
    },
  ]
})

export default router
