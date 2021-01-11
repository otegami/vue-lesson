<template>
  <div>
    <likeHeader #default="slotProps">
      <!-- template で指定されている slot 以外をデフォルト slot として渡す -->
      <p>{{ slotProps }}</p>
      <h2>みなさん</h2>
      <h3>初めまして</h3>
      <p>よろしくお願いします</p>
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
      number: 14,
      title: "title"
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
