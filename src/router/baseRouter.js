

export default [
//   {
//     path: '/popup/:name/:id?',
//     name: 'detailPopup',
//     component: () => import(/* webpackChunkName:'detail' */ '../views/pages/DetailPopup.vue'),
//     meta: {
//       rule: 'editor'
//     }
//   },
  {
    path: '/500',
    name: '500',
    component: () =>
      import(/* webpackChunkName:'pages' */
        '../views/pages/404.vue'),
    meta: {
      anonymous: true
    }
  },
  {
    path: '/403',
    name: '403',
    component: () =>
      import(/* webpackChunkName:'pages' */
        '../views/pages/403.vue'),
    meta: {
      anonymous: true
    }
  },
  {
    path: '/account/authorize',
    name: 'authorize',
    component: () =>
      import(/* webpackChunkName:'login' */
        '../views/pages/LoginPage.vue'),
    meta: {
      anonymous: true
    }
  },
  {
    path: '/account/logout',
    name: 'logout',
    component: () =>
      import(/* webpackChunkName:'logout' */
        '../views/pages/LoginPage.vue'),
    meta: {
      anonymous: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName:'login' */
        '../views/pages/LoginPage.vue'),
    meta: {
      anonymous: true
    }
  },
]

