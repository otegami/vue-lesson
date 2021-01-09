import Vue from 'vue'
// Vue Loader が '.vue' ファイルをシングルコンポーネントファイルとして認識して使うことができる
// import したら component になるものが、 .vue ファイル
import App from './App.vue'
import LikeNumber from './LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)

new Vue({
  render: h => h(App),
}).$mount('#app')
