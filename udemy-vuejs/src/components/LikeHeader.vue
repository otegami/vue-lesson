<template>
  <div>
    <!-- slot は、html のテンプレートを全て送ることができる -->
    <slot :user="user" text="text"></slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'Otegami',
        lastName: 'Donald'
      }
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red
  }
</style>
