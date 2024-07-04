<template lang="pug">
.footer
  .footer-mobile
    .link-list
      a(href="https://apps.apple.com/vn/app/t%C3%A0ng-th%C6%B0-vi%E1%BB%87n-ttv/id1099247862") IOS
      a(href="https://play.google.com/store/apps/details?id=com.book.truyen.tangthuvien") Android
      a(href="/") PC
      a(href="") Nội quy
    p.copy-right {{`copyright © 2017 Tàng thư viện mobile`}}
  
  .footer-largeDevice
    .footer-content
      img(src="https://truyen.tangthuvien.vn/images/logo-web-gray.png")
      .privacy-content
        p © 2007 Tàng Thư Viện - Chính sách
        p Tàng Thư Viện là sân chơi mở và free cho cộng đồng fan kiếm hiệp, tiên hiệp, ngôn tình. Chúc các bạn có những giây phút thư giãn thoải mái sau giờ làm việc và học tập căng thẳng.
</template>

<style lang="stylus" scoped>
.footer-mobile
  margin-top 5px
  background-color #fff
  .link-list
    display flex
    justify-content space-around
    a
      font-size 14px
      height 48px
      line-height 48px
      font-weight 500
      color #33373d
      text-decoration none
  .copy-right
    font-size 13px
    font-weight 300
    padding-top 5px
    padding-bottom 5px
    text-align center
    color #969ba3

.footer-largeDevice
  background-color #f8f8f8
  border-top 1px solid #e7e7e7
  color #4E4E4E
  font-size 14px
  padding 20px 0
  display none
  .footer-content
    max-width 1200px
    margin auto
    display flex
    img
      height 60px
    .privacy-content
      flex 1
      margin-left 30px
@media screen and (min-width: 768px)
  .footer-mobile
    display none
  .footer-largeDevice
    display block 
</style>