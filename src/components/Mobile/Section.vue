<template lang="pug">
.section
  .section-header
    h3 {{props.title}}
    a.more-btn(href="https://m.truyen.tangthuvien.vn/moi-cap-nhat")
      p xem thêm
      AngleRightIcon(width="14px" height="14px" fill="gray")
  
  .section-tab(v-if="props.tabList")
    .tab-inner
      p(@click="() => currentTab = tab" :class="tab === currentTab ? ['tab-item', 'tab-active'] : 'tab-item'" v-for="tab in props.tabList" :key="tab") {{ tab }}
  
  .horizontal-list(v-if="props.listType === 'horizontal'")
    a.comic-item(v-for="comic in props.list" :key="comic.name")
      img(:src="comic.imageUrl")
      p.comic-name {{comic.name}}

  .vertical-list(v-if="props.listType === 'vertical'")
    a.comic-item(v-for="comic in props.list" :key="comic.name")
      img(:src="comic.imageUrl")
      .comic-detail
        h4 {{comic.name}}
        p.info Thể loại: {{comic.type}}
        p.info Tác giả: {{comic.author}}
        p.status Lượt xem: {{comic.views}}
        p.status Tình trạng: {{comic.status}}
        p.status Số chương: {{comic.numberOfChapter}}


</template>

<script setup>
import { ref } from "vue";

import AngleRightIcon from "../../assets/svg/angle-right-solid.svg"

const props = defineProps({
  title: String,
  tabList: Array,
  listType: String,
  list: Array
})

const currentTab = ref('Convert')
</script>

<style lang="stylus" scoped>
.section
  padding 6px
  background-color #fff
  & + .section
    margin-top 12px
  .section-header
    padding 6px 
    margin-bottom 10px
    display flex
    align-items center
    justify-content space-between
    border-bottom: 0.7px solid rgba(0, 0, 0, 0.1);
    h3 
      color #33373d
      font-weight 400
      font-size 16px
      text-transform uppercase
      padding-left 5px
      border-left 2px solid red
    .more-btn
        display flex
        align-items center
        text-decoration none
        p
          color #33373d
          font-size 14px
          font-weight 600
          text-transform uppercase
  .section-tab
    padding 6px
    margin 5px 0
    .tab-inner
      display flex
      border 1px solid #ed424b
      border-radius 5px
      overflow hidden
      .tab-item
        flex 1
        padding 5px
        font-weight 400
        font-size 13px
        text-align center
        color #ed424b
        background-color #fff
      .tab-active
        color #fff
        background-color #ed424b
     
  .horizontal-list
    display flex
    gap 10px
    .comic-item
      flex 1
      img 
        width 100%
        min-height 50px
        max-height 200px
        object-fit cover
      p
        margin 3px 0 2px
        font-size 13px
        overflow hidden
        text-transform capitalize
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 3 
        line-clamp 3
        -webkit-box-orient vertical
        color #333
  .vertical-list
    .comic-item
      display flex
      align-items flex-start
      gap 30px
      padding 6px
      img
        width 66px
        height 105px
        object-fit cover
      .comic-detail
        flex 1
        h4 
          font-size 14px
          color #33373d
          text-transform capitalize
        .info
          color #969ba3
          font-size 12px
        .status
          font-size 13px
          color #33373d
</style>