<template>
  <div>
    <!-- slot は、html のテンプレートを全て送ることができる -->
    <slot>
      <h2>デフォルトのタイトル</h2>
    </slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String
    }
  },
}
</script>

<style scoped>
  h1 {
    color: red
  }
</style>
