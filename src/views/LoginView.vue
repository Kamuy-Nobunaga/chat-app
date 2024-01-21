<template>
    <div class="login">
      <form class="login-form" @submit.prevent="nextStep()">
        <h1>Login to chat!</h1>
        <div class="login-inner">
          <label for="username">Username</label>
          <input 
            type="text" 
            v-model="username"
            placeholder="Enter your username...">
          <input 
            type="submit" 
            value="Let's chat!"
            :disabled="username === ''" >
        </div>
      </form>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';


        const username = ref('')

        const emit = defineEmits({
            next: (_name: string) => true
        })

        const nextStep = () => {
            emit('next', username.value)
        }

</script>

<style lang="scss" scoped>
  // Lightest #DDE6ED
  // Middle #9DB2BF #526D82
  // Darkest #27374D

  .login {
    .login-form {
      margin: 0 auto;
      width: 90%;
      > h1 {
        margin: 0;
        margin-top: 20px;
        font-size: 4rem;
        color: #526D82;
        text-align: center;
      }
      .login-inner {
        color: #526D82;
        > label {
          margin-top: 3rem;
          display: block;
          padding: 10px;
          font-size: 4rem;
          text-align: center;
        }
        > input[type="text"], > input[type="text"]:focus {
          margin: 0 auto;
          display: block;
          width: 50%;
          height: 3rem;
          font-size: 1.5rem;
          padding: 10px;
          color: #526D82;
          font-weight: bold;
          background: #DDE6ED;
          border: none;
          outline: none;
        }
        > input[type="submit"] {
          margin: 50px auto;
          display: block;
          border: none;
          color: #DDE6ED;
          background: #27374D;
          width: 30%;
          height: 3rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 20px;
          box-shadow: 2px 2px 2px black;

        }
        > input[type="submit"]:active {
          position: relative;
          top: 2px;
          left: 2px;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .login {
      .login-form {
        > h1 {
          margin: 0;
          margin-top: 30px;
          font-size: 2.5rem;
          font-weight: bolder;
        }
        .login-inner {
          > label {
            margin-top: 1rem;
            padding: 10px;
            font-size: 2rem;
          }
          > input[type="text"], > input[type="text"]:focus {
            width: 65%;
            height: 2rem;
            font-size: 0.8rem;
            padding: 5px;
          }
          > input[type="submit"] {
            margin: 40px auto;
            width: 40%;
          }
        }
      }
    }
  }
</style>