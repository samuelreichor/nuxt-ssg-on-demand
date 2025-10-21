<script lang="ts" setup>
const { data:time } = useFetch('/api/getTime')
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>currentTime: {{ time }}</p>
    <p>Kale chips lumbersexual green juice tumeric, farm-to-table church-key tbh viral iceland pour-over VHS kombucha adaptogen. Migas shabby chic vibecession paleo tousled VHS taxidermy 3 wolf moon tacos. Yr cred raclette health goth street art franzen marxism cliche sus snackwave coloring book. Succulents shabby chic tbh typewriter. Poutine photo booth copper mug activated charcoal</p>  </div>
</template>
