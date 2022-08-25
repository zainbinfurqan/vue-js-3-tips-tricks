
<script>
import { onMounted } from 'vue'
import { ref } from 'vue'
export default {

  setup() {
    let users = ref([])
      const  fetchApi = async () =>{
        const res = await fetch('https://api.instantwebtools.net/v1/passenger?page=0&size=10');
        const response = await res.json()
        users.value = response
      }
    onMounted(() => {
        fetchApi()
    })
    return {users}
  },
}
</script>

<style>

</style>


<template>
 <p>{{ users }}</p>
</template>
