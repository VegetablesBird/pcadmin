import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../../../components/HelloWorld'
import BackcolList from '../page/BackcolList.vue'
import BackcolDetail from '../page/BackcolDetail.vue'
import CustomList from '../page/CustomList.vue'
import CustomDetail from '../page/CustomDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/BackcolList/:typeID',
      name: 'BackcolList',
      component: BackcolList
    },
    {
      path: '/BackcolDetail/:id',
      name: 'BackcolDetail',
      component: BackcolDetail
    },
    {
      path: '/CustomList',
      name: 'CustomList',
      component: CustomList
    },
    {
      path: '/CustomDetail/:id',
      name: 'CustomDetail',
      component: CustomDetail,
      // children: [
      //   {
      //     path: ':id',
      //     component: CustomDetail
      //   }
      // ]
    }
  ]
})
