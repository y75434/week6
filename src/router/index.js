import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/about',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: '/check',
        component: () => import('../views/Check.vue'),
      },
      {
        path: '/product/:id',
        component: () => import('../views/Product.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/Order.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
