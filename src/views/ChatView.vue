<template>
  <div class="chat-view">
    <MessageInfo :username="username" />
    <MessageContainer :messages="messages" :username="username" />
    <MessageInput :username="username" />
  </div>
</template>

<script lang="ts">
import MessageInfo from '../components/chats/MessageInfo.vue'
import MessageContainer from '../components/chats/MessageContainer.vue'
import MessageInput from '../components/chats/MessageInput.vue'
import { onMounted, ref } from 'vue'
import { messagesRef } from '../firebase'
import { onValue, DataSnapshot } from 'firebase/database'
import dayjs from 'dayjs'


export default {
    props: ['username'],
    components: { MessageInfo, MessageContainer, MessageInput }, 
    setup() {
        type Message = {
            key: string, 
            message: string, 
            username: string, 
            time: string
        }

        let messages = ref([] as Array<Message>)
        let loginTimestamp = 0

        onMounted(() => {
            loginTimestamp = dayjs().unix()
            onValue(messagesRef, (snapshot: DataSnapshot) => {
                if (snapshot.exists()) {
                    let size = 1
                    snapshot.forEach((item) => {
                        if (snapshot.size === size && item.key !== null && Number(item.key) >= loginTimestamp) {
                            messages.value.push(item.val())
                        }
                        size++
                    })
                }
            }, (err) => {
                console.error(err);
                
            })
        })
        return { messages }
    }
}
</script>

<style lang="scss" scoped>
    .chat-view {
        height: 100%;
        position: relative;
    }
</style>