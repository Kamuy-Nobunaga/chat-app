<template>
  <div class="send-message">
    <textarea name="messageInput" placeholder="Send message..." ref="messageInput" v-model="msg"></textarea>
    <button :disabled="msg === '' || !sendController" @click="send()"><span>Send</span></button>
  </div>
</template>

<script lang="ts" setup>
    import { ref, defineProps } from 'vue'
    import { writeUserData } from '../../firebase'

    const messageInput = ref<HTMLInputElement>()

    const msg = ref('')
    const loading = ref(false)
    const sendController = ref(true)

    const props = defineProps({
        username: {
            type: String, 
            required: true
        }
    })

    const send = () => {
        try {
            sendController.value = false
            writeUserData(props.username, msg.value)
            setTimeout(() => {
                sendController.value = true
            }, 800)
            msg.value = ''
        } catch (err) {
            console.log(`error: ${err}`);
            
        }
        toFocusMessageInput()
    }

    const toFocusMessageInput = () => {
        messageInput.value?.focus()
    }
</script>

<style lang="scss" scoped>
    // Lightest #DDE6ED
    // Middle #9DB2BF #526D82
    // Darkest #27374D
    .send-message {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 20px;
        width: 100%;
        > textarea, >textarea:focus {
            width: 75%;
            background: #DDE6ED;
            color: #27374D;
            border: none;
            border-radius: 10px;
            outline: none;
            font-size: 1rem;
            padding: 10px;
            font-weight: bold;
            overflow: auto;
        }
        > button {
            position: absolute;
            bottom: 10px;
            right: 10px;
            width: 6rem;
            height: 3rem;
            margin: 0 20px;
            font-weight: bolder;
            border: none;
            border-radius: 10px;
            background: #27374D;
            > span {
                padding: 0 10px;
                font-size: 1rem;
                color: #DDE6ED;
            } 
        }
    }
    @media (max-width: 1200px) {
        .send-message {
        margin: 15px;
        width: 100%;
        bottom: 5px;
        > textarea, >textarea:focus {
            width: 60%;
            font-size: 0.8rem;
            padding: 8px;
        }
        > button {
            position: absolute;
            bottom: 7px;
            right: 7px;
            width: 3rem;
            height: 2.5rem;
            margin: 0 15px;
            > span {
                padding: 0;
                font-size: 0.8rem;
            } 
        }
    }
    }
</style>