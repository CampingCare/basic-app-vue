<script setup>

import { computed } from 'vue' ;
import { useRoute } from "vue-router" ;

const id = computed(() => {

    if(useRoute()?.query?.id == null) return null ;

    return useRoute().query.id ;

})

</script>

<template>

  <div class="widget">
    <div>
      <h3>This is the Dashboard widget</h3>
    </div>
  </div>

</template>

<style>
  .widget {
    text-align: center;
    padding: 32px 32px;
  }
</style>
