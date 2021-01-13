<template>
  <div class="main">
    <div>
      <button @click="myAnimation = 'slide'">Slide</button>
      <button @click="myAnimation = 'fade'">Fade</button>
    </div>
    <button @click="show = !show">切り替え</button>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="hey">さよなら</p>
      <p v-else key="bye">こんにちは</p>
    </transition>
    <transition 
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shakeX"
    >
      <p v-if="show">Hello!</p>
    </transition>
    <transition 
      :name="myAnimation"
      appear
    >
      <div v-if="show">
        <p>Bye</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      myAnimation: 'fade'
    }
  }
}
</script>

<style scoped>
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-leave-to {
  /* 消えるときの最後の状態 */
  opacity: 0;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}
.slide-leave,
.slide-enter-to {
  opacity: 1;
}
@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
