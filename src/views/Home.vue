<template lang="pug">
div
  //- Header
  PrimaryHeader 

  //- Body
  .body-container 
    div(v-if="!isLargeDevice")
      SlideShow
      MobileView
      
    div(v-else)
      LargeDeviceView


</template>
  
<script setup>
  import {onMounted, ref, watchEffect} from 'vue'
  
  import PrimaryHeader from "../components/PrimaryHeader.vue"
  import SlideShow from "../components/SlideShow.vue"
  import MobileView from '../components/MobileView.vue'
  import LargeDeviceView from '../components/LargeDeviceView.vue'
  
  const isLargeDevice = ref()
  
  onMounted(() => {
    isLargeDevice.value = window.innerWidth >= 768
    window.addEventListener('resize', handleResizeScreen)
  })


  function handleResizeScreen() {
    if(window.innerWidth < 768) {
      isLargeDevice.value = false
    }
    else {
      isLargeDevice.value = true
    }
  }
  
</script>
  
<style lang="stylus" scoped>
  .body-container
      padding-bottom 10px
</style>