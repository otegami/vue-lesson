<template>
  <div>
    <likeHeader header-text="hello">
      <!-- <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2> -->
    </likeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber($event)"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      number: 14
    }
  },
  components: { LikeHeader },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue
  }
  h1 {
    color: blue
  }
</style>
