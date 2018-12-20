import global from './global.vue'
import Vue from 'vue'

const GlobalConstructor = Vue.extend(global)
let instance = null

function showGlobal(openTime, msg) {
  if (instance) { return }
  instance = new GlobalConstructor({
    el: document.createElement('div')
  })
  instance.time = openTime
  instance.msg = msg
  instance.isShow = true // 触发弹窗显示的动画
  instance.$on('close', () => { instance = null })
  // @question：这里把instance变成null, 是否影响实例中的this
  document.body.appendChild(instance.$el)
}

function registerGlobal() {
  Vue.prototype.$showGlobal = showGlobal
}

Vue.use(registerGlobal)
