<template lang="pug">
.container
  h3 {{ props.title }}
  a.btn(href="" v-if="props.content")
    p {{ content }}
    AngleRightIcon(width="15px" height="15px" fill="#a6a6a6")

</template>

<script setup>
import AngleRightIcon from "../../assets/svg/angle-right-solid.svg"

const props = defineProps({
  title: String,
  content: String,
  link: String
})

</script>

<style lang="stylus" scoped>
.container
  padding-bottom 4px
  border-bottom 1px solid #666
  display flex
  justify-content space-between
  align-items center
  h3
    color #1a1a1a
    font-size 18px
    font-weight 400
    text-transform capitalize
  .btn
    display flex
    align-items center
    text-decoration none
    p
      color #a6a6a6
      text-transform capitalize
      margin-right 5px
</style>
