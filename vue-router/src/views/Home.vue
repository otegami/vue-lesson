<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Users のページに行く</button>
  </div>
</template>
<script>
export default {
  methods: {
    toUsers() {
      this.$router.push({ path: "users/1" })
    }    
  }
}
</script>
