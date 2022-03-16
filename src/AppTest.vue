<script setup>
import { ref, KeepAlive } from 'vue'
import Comp from './Test1.vue'
import Comp2 from './Test2.vue'

const showNoExcludeFirst = ref(true)
const showExcludeFirst = ref(true)
</script>

<template>
  <div>
    <p>keep alive with no exclude</p>
    <KeepAlive>
      <KeepAlive>
        <Comp v-if="showNoExcludeFirst" />
        <Comp2 v-else />
      </KeepAlive>
    </KeepAlive>
    <button @click="showNoExcludeFirst = !showNoExcludeFirst">
      switch
    </button>
    <p>
      expect remain input value for two input and it does
    </p>
  </div>
</template>
