<script setup>

import { computed, onMounted, ref } from 'vue' ;
import { useRoute } from "vue-router" ;
import api from '../../plugins/api.ts' ;

const action = computed(() => {

    if(useRoute()?.query?.action == null) return null ;

    return useRoute().query.action ;

})

const user = ref(null);

const getUser = async () => {

    try {
        
        let result = await api.get('/users/me', { get_rights: 1 }) ;
        user.value = result.data ;

    } catch (error) {
        console.error(error);
    }

}


onMounted(() => {
    
    getUser();

})

</script>

<template>

  <div>
    
    <h1>Example app</h1>

    <h2 v-if="action == 'install'">Install your application</h2>
    <h2 v-else-if="action == 'uninstall'">Uninstall your application</h2>
    <h2 v-else>User opened the app</h2>

    <pre v-if="user">{{ user }}</pre>

  </div>

</template>
