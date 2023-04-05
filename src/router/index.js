import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由
import login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    redirect: '/login/login',
    children: [
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "loginComponent" */ '@/components/login/Login.vue'),
        meta: {
          title: '登录页面'
        }
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "homeComponet" */ '@/views/Home/index.vue'),
    meta: {
      title: '试卷管理'
    }
  },
  {
    path: '/paper/create',
    name: 'CreatePaper',
    component: () => import(/* webpackChunkName: "createPaperComponet" */ '@/views/Paper/createPaper.vue'),
    meta: {
      title: '创建试卷'
    },
    children: [
      {
        path: 'single',
        component: () => import(/* webpackChunkName: "loginComponent" */ '@/components/question/single.vue'),
        meta: {
          title: '单选题'
        }
      },
      {
        path: 'multiple',
        component: () => import(/* webpackChunkName: "loginComponent" */ '@/components/question/multiple.vue'),
        meta: {
          title: '多选题'
        }
      },
      {
        path: 'judgment',
        component: () => import(/* webpackChunkName: "loginComponent" */ '@/components/question/judgment.vue'),
        meta: {
          title: '判断题'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
