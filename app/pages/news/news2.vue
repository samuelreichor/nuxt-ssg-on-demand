<script lang="ts" setup>
const { data:time } = useFetch('/api/getTime')
</script>

<template>
  <div>
    <h1>News 2</h1>
    <p>currentTime: {{ time }}</p>
    <p>
Asymmetrical air plant solarpunk yes plz live-edge mukbang thundercats. Hexagon selvage plaid, migas skateboard bitters lo-fi same listicle vaporware authentic locavore 90's. Ennui vegan chartreuse, pabst chambray kogi DSA VHS. Normcore chicharrones post-ironic woke jawn, hexagon pitchfork bruh lumbersexual vape polaroid sartorial asymmetrical cred next level. JOMO jawn sartorial, VHS PBR&B blog raclette jianbing literally trust fund twee.    </p>
  </div>
</template>
