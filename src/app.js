import './assets/styles/app.scss'
import "babel-polyfill";
import Vue from 'vue'
import hello from './hello.vue'

new Vue({
    el:'#app',
    render:h=>h(hello)
})