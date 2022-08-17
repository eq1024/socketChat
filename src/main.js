import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import io from "socket.io-client";
const socket = io("http://127.0.0.1:3333", { reconnection: false });
const app = createApp(App)
app.provide('socket', socket)
app.mount('#app')
