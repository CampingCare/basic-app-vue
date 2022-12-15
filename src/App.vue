<script setup>

import { onMounted } from 'vue'
import { init as initWidgets } from '../plugins/widgets.ts'

onMounted(() => {

  // init the widget to be sure the widget will have the right height
  initWidgets() ;
  
})

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

body, html {
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
  margin: 0px 0px 0px 0px;
  overflow: hidden;
}

body  {
  padding: 16px 16px;
}

</style>

<template>

  <div>
    
    <RouterView />

  </div>

</template>
