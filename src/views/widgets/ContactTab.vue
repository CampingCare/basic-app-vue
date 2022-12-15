<script setup>

import { computed } from 'vue' ;
import { useRoute } from "vue-router" ;

const id = computed(() => {

    if(useRoute()?.query?.id == null) return null ;

    return useRoute().query.id ;

})

const refresh = () => {

window.top.postMessage({
    refresh: true
}, '*') ;

}

</script>

<template>

  <div class="widget">
    <div>
      <h3>This is an contact Tab widget, gives you more space!</h3>
      <p>Contact ID: {{ id }}</p>
      <p><button @click="refresh()">Refresh Contact</button></p>
    </div>
  </div>

</template>

<style>
  .widget {
    text-align: center;
    padding: 100px 32px;
  }
</style>
