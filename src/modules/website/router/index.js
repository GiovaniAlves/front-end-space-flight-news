const Home = () => import('./../views/Home.vue')

export default [
   {
      path: '',
      component: () => import('@/Layouts/Website'),
      children: [
         {
            path: '/home',
            name: 'Home',
            component: Home
         }
      ]
   }
]
