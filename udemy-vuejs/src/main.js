import Vue from 'vue'
// Vue Loader が '.vue' ファイルをシングルコンポーネントファイルとして認識して使うことができる
// import したら component になるものが、 .vue ファイル
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
