<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click='increment'>+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      // データを受け渡すものではなく、子コンポーネントから好きなタイミングで、親のイベントを発火できる
      // カスタムイベントを作ることができるのもの
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red
  }
</style>
