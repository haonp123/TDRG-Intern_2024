<template lang="pug">
div
  //- Header
  Header 

  //- Body
  .body-container 
    div(v-if="!isLargeDevice")
      SlideShow
      MobileView
      
    div(v-else)
      LargeDeviceView

  //- Footer
  Footer


</template>
  
<script setup>
  import {onMounted, ref} from 'vue'
  
  import Header from "../components/Header/Header.vue"
  import Footer from "../components/Footer.vue"
  import SlideShow from "../components/SlideShow.vue"
  import MobileView from '../components/Mobile/MobileView.vue'
  import LargeDeviceView from '../components/LargeDevice/LargeDeviceView.vue'
  
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
</style>