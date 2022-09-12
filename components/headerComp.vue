<template>
  <nav class="_df _jcsb _aic _mtxs">
    <ladonIcon class="headerImage"/>
    <div class="_df _aic">
      <span class="_mrxxs">{{ userName }}</span>
      <img :src="userImage" class="_bdrs50p headerImage"/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ladonIcon from "./Icons/ladonIcon.vue";
import userImageDefault from "@/assets/fox.png"

const props = defineProps({
  userName: { type: String, default: "Visitor" },
  userImage: { type: String, default: userImageDefault }
})
</script> 

<style>
  .headerImage {
    width: 50px;
    height: 50px;
  }
</style>