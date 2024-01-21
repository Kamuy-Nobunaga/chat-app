<template>
  <div class="chatroom">
    <Login v-if="step === 1" @next="nextStep" />
    <Chat v-if="step === 2" :username="username" />
    
  </div>
</template>

<script lang="ts">
import Login from './LoginView.vue'
import Chat from './ChatView.vue'
import { ref } from 'vue';

export default {
    components: { Login, Chat },
    setup() {
        const username = ref('')
        const step = ref(1)

        const nextStep = (name: string) => {
            if (name !== '') {
                username.value = name
                step.value = 2
            }
        }

        return { username, step, nextStep }
    }
}
</script>

<style lang="scss" scoped>
  // Lightest #DDE6ED
  // Middle #9DB2BF #526D82
  // Darkest #27374D

  .chatroom {
    width: 50%;
    height: 70vh;
    margin: 0 auto;
    border: 15px #DDE6ED;
    border-style: inset outset;
  }
  @media (max-width: 900px) {
    .chatroom {
      width: 70%;
      border: 10px #DDE6ED;
      border-style: inset outset;
    }
    
  }
</style>