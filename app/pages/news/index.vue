<script lang="ts" setup>
const { data:time } = useFetch('/api/getTime')
</script>

<template>
  <div>
    <h1>News Overview</h1>
    <p>currentTime: {{ time }}</p>
    <p>
      Scenester pinterest yuccie cardigan pok pok. Bruh synth fanny pack squid marfa chillwave. Pinterest food truck authentic swag marxism crucifix keffiyeh sriracha plaid kitsch coloring book yr. Chartreuse pork belly vibecession, prism kinfolk DSA celiac stumptown venmo kombucha leggings farm-to-table taxidermy roof party sustainable. Ascot slow-carb chillwave, swag everyday carry plaid hoodie.
    </p>
  </div>
</template>
