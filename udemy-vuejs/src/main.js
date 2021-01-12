import Vue from 'vue'
// Vue Loader が '.vue' ファイルをシングルコンポーネントファイルとして認識して使うことができる
// import したら component になるものが、 .vue ファイル
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)
Vue.filter("upperCase", (value) => {
  return value.toUpperCase()
})
Vue.mixin({
  created() {
    console.log("global mixin")
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
