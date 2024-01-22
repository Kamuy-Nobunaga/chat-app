<template>
  <div class="message-container">
    <div class="message-block" ref="messageContainer">
        <div 
            v-for="m in messages"
            :key="m.key"
            :class="m.username === username ? 'user' : 'other-user'">
            <span v-if="m.username === username">{{ m.message }}</span>
            <div v-if="m.username !== username">
                <span>{{ m.username }}</span>
                <span>{{ m.message }}</span>
            </div>
        </div>
    </div>
  </div>
</template>
    
<script lang="ts" setup>
    import { ref, nextTick, type PropType, watch, defineProps } from 'vue'


    type Message = {
            key: string, 
            message: string, 
            username: string, 
            time: string
        }
    
    const messageContainer = ref<HTMLInputElement>()

    const props = defineProps({
        messages: {
            type: Array as PropType<Array<Message>>,
            required: true
        }, 
        username: {
            type: String, 
            required: true
        }
    })

    watch(props.messages, () => {
        scrollToEnd()
    })

    const scrollToEnd = () => {
        nextTick(() => {
            messageContainer.value!.scrollTo({ top: messageContainer.value!.offsetHeight})
        })
    }

</script>

<style lang="scss" scoped>
  // Lightest #DDE6ED
  // Middle #9DB2BF #526D82
  // Darkest #27374D

    .message-container {
        height: 48vh;
        margin: 0 20px;
        
        .message-block {
            height: 100%;
            overflow: auto;
            .user {
                margin: 15px auto;
                text-align: end;
                > span {
                    background: #27374D;
                    color: #9DB2BF;
                    padding: 7px 15px;
                    border-radius: 20px;
                    font-size: 1.5rem;
                }
            }
            .other-user {
                > div {
                    > span:first-child {
                        display: block;
                        color: #526D82;
                        margin:0 0 3px 3px;
                        font-size: 1.2rem;
                    }
                    > span:last-child {
                        background: #27374D;
                        color: #9DB2BF;
                        padding: 5px 15px;
                        border-radius: 20px;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
    
</style>