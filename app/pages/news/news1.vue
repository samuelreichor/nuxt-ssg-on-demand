<script lang="ts" setup>
const { data:time } = useFetch('/api/getTime')
</script>

<template>
  <div>
    <h1>News 1</h1>
    <p>currentTime: {{ time }}</p>
    <p>
      Mustache XOXO bicycle rights af VHS PBR&B marfa. Letterpress banh mi bitters iceland fingerstache sartorial, thundercats echo park. Heirloom mustache shaman helvetica art party. Fingerstache pinterest asymmetrical meh. Leggings bespoke single-origin coffee gentrify wayfarers adaptogen tacos. Lumbersexual gentrify man braid PBR&B kale chips butcher XOXO helvetica hammock next level prism retro cred salvia. Retro gentrify church-key hella tonx JOMO.
    </p>
  </div>
</template>
