import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs'


const firebaseConfig = {
  apiKey: "AIzaSyDmMU1MKU9fJh_sONrL8qdrB6wI6YaOjKk",
  authDomain: "chatroom-50ce8.firebaseapp.com",
  databaseURL: "https://chatroom-50ce8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatroom-50ce8",
  storageBucket: "chatroom-50ce8.appspot.com",
  messagingSenderId: "792265184022",
  appId: "1:792265184022:web:6d482ca47abc1f73bc7637",
  measurementId: "G-YP5X9XY2VY"
};

// databaseURL: 'https://chatroom-50ce8-default-rtdb.asia-southeast1.firebasedatabase.app'

// Initialise Firebase
const app = initializeApp(firebaseConfig);
// Initialise realtime db and get a reference to the service
export const db = getDatabase(app)
export const messagesRef = ref(db, "messages")

export const writeUserData = (username: string, message: string) => {
    set(ref(db, `messages/${dayjs().unix()}`), {
        key: uuidv4(),
        username,
        message,
        time: dayjs().unix()
    })
}