<template lang="pug">
  .nav-bar
    a.nav-item(href="")
      i.nav-icon(style="background-position: -60px -28px")
      p Thể loại
    a.nav-item(href="")
      i.nav-icon
      p Xếp hạng
    a.nav-item(href="")
      i.nav-icon(style="background: url('/images/ic_filter.png') no-repeat center 3px / 24px 24px")
      p Bộ lọc
    a.nav-item(href="")
      i.nav-icon(style="background-position: -30px -30px" class="nav-icon")
      p Top User
    a.nav-item(href="")
      i.nav-icon(style="background-position: 0px -60px" class="nav-icon")
      p Review
</template>

<script setup>

</script>

<style lang="stylus" scoped>
  .nav-bar 
    display flex
    justify-content space-around
    background #fff
    padding 12px
  
    .nav-item 
      text-decoration none
      display flex
      flex-direction column
      align-items center
      i
        width 27px
        height 26px
        display inline-block
        background-image url('/images/sprite.png')
        background-size 87px 87px
      p
        font-size 12px
        margin-top 5px
        font-weight 500
        color #000
</style>