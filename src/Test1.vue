<script setup>
import { ref, onActivated } from 'vue'
const text = ref( (new Date()).toString())
const msg = ref('')
onActivated(()=>{
  console.log( (new Date()).toString())
})
</script>

<template>asasdsdsdsdsdsdsdasdasdsdasdasdasd
  <input v-model="msg" placeholder="type and switch(Comp)">
</template>
