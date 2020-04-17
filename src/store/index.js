import Vue from 'vue'
import Vuex from 'vuex'
// 使用 vuex 作为存储
import d2admin from './modules/d2admin'

Vue.use(Vuex)

export default new Vuex.Store({
  // # 这里相当于是一个注入了一个模块
  modules: {
    d2admin
  }
})
