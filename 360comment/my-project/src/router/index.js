import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 动态import，实现路由懒加载

// 全局路由导航
const beforeEach = ((to, from, next) => {
  
})

const afterEach = ((to,from,next) => {
  
})

// 滚动行为，实现切换路由是滚动到顶部
const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

export default new Router({
  beforeEach,
  afterEach,
  scrollBehavior,
  routes: [
   
  ]
})
