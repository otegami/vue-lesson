<template>
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number ++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue"
import { tokyoNumber } from "@/tokyoNumber"

export default {
  mixins: [ tokyoNumber ],
  components: { CountNumber }
}
</script>
