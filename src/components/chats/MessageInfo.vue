<template>
  <div class="info">
    <span>{{ username.toUpperCase() }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
    username: {
        type: String, 
        required: true
    }
})
</script>

<style lang="scss" scoped>
  // Lightest #DDE6ED
  // Middle #9DB2BF #526D82
  // Darkest #27374D

  .info {
    display: block;
    margin: 10px auto;
    text-align: center;
    > span {
      font-size: 3rem;
      color: #27374D;
      font-weight: bolder;
    }
  }
  @media (max-width: 900px) {
    .info {
      > span {
        font-size: 2rem;
      }
    }
  }
</style>