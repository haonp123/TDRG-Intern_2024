<template lang="pug">
div
  .nav-bar-container
    .nav-bar-inner
      .type-btn
        BarsIcon(width="15px" height="15px" fill="#fff")
        p Thể loại
      .filter-list
        a(href="") Diễn đàn
        a(href="") Bảng xếp hạng 
        a(href="") Bộ lọc
        a(href="") Reviews
        a(href="") Cửa hàng
      a.download-btn(href="https://truyen.tangthuvien.vn/tai-app" target="_blank")
        MobileIcon(width="15px" height="15px" fill="#fff")
        p Tải app
  
  .main
    .section-1
      .small
        .title Truyện mới xem 
        .readComic-list
          .readComic-item(v-for="comic in readComicList")
            a(href="") {{ comic.name }}
            p Chương {{ comic.chapter }}
      .largest
        h3 Biên tập viên đề cử
        .myFlex-row.center-container
          img(src="https://www.nae.vn/ttv/ttv/public/images/story/7b0039f16a269e4ef46287528f0e413d6ec9d7635151ba2413cfcec599af3f33.jpg")
          .info
           h4 Toàn thuộc tính võ đạo
           p Thời không khe hở liên thông dị giới, thời đại võ đạo giáng lâm! Không...
           button Đọc truyện
        .myFlex-row.row-3 
          .row-3-item
            p.name [Dịch] Kiếm Lai - Tàng Thư
            p.numberChapter 414 chương 
            p Thế giới rộng lớn không thiếu cái lạ. Trần Bình An ta chỉ với một...
          .row-3-item
            p.name [Dịch] Kiếm Lai - Tàng Thư
            p.numberChapter 414 chương 
            p Thế giới rộng lớn không thiếu cái lạ. Trần Bình An ta chỉ với một...
          .row-3-item
            p.name [Dịch] Kiếm Lai - Tàng Thư
            p.numberChapter 414 chương 
            p Thế giới rộng lớn không thiếu cái lạ. Trần Bình An ta chỉ với một...
        .myFlex-row.row-3
          .row-3-item
            p.name [Dịch] Kiếm Lai - Tàng Thư
            p.numberChapter 414 chương 
            p Thế giới rộng lớn không thiếu cái lạ. Trần Bình An ta chỉ với một...
          .row-3-item
            p.name [Dịch] Kiếm Lai - Tàng Thư
            p.numberChapter 414 chương 
            p Thế giới rộng lớn không thiếu cái lạ. Trần Bình An ta chỉ với một...
          .row-3-item
            p.name [Dịch] Kiếm Lai - Tàng Thư
            p.numberChapter 414 chương 
            p Thế giới rộng lớn không thiếu cái lạ. Trần Bình An ta chỉ với một...
      .small
        .title.myFlex-row
          p Đang theo dõi 
          a.myFlex-row(href="")
            p Tất cả
            AngleRightIcon(width="15px" height="15px" fill="#ccc")

        .readComic-list
          .readComic-item(v-for="comic in followedComicList")
            a(href="") {{ comic.name }}
            p Chương {{ comic.chapter }}

    a(href="https://truyen.tangthuvien.vn/tai-app" target="_blank")
      img(src="/images/banner-app-ttv.jpg")

    .section-2
      .myFlex-row(style="border-bottom: 1px solid #666; padding-bottom: 6px")
        h3 Truyện mới
        .myFlex-row
          p Xem thêm 
          AngleRightIcon(width="15px" height="15px")
      .myFlex-row
        .special-comic
          img(src="https://www.nae.vn/ttv/ttv/public/images/story/f34707ac2ff9f0b1bf5f9346a1b35f87328e91f195ac445d1ac6d4605e1b9f63.jpg")
          h4 Toàn dân thần chích
          div
            p Mộc Diệp Chi phong
            p 225 chương
          p Một trận thành thần trò chơi, một viên vỡ vụn thần cách, chúng sinh sở cầu bất hủ...
        .new-list
          .row.myFlex-row
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn
          .row.myFlex-row
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn
          .row.myFlex-row
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn
            .col
              img(src="https://www.nae.vn/ttv/ttv/public/images/story/0ab9fbe917d20cac55123ea2a3267ed3c3d8ad4921f25612adcd782c1826ca73.jpg")
              .info
                h5 Toàn cầu tuổi thọ rút
                p Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ! Đánh...
                .myFlex-row(style="margin-top: 5px")
                  .div(style="display: flex; align-items: center")
                    UserIcon(width="15px" height="15px")
                    p Bồ Táp
                  a(href="" style="border: 1px solid #ccc; color: #ccc; padding: 3px 2px") Khoa Huyễn

  .footer
    .footer-content.myFlex-row
      img(src="https://truyen.tangthuvien.vn/images/logo-web-gray.png")
      .privacy-content
        p © 2007 Tàng Thư Viện - Chính sách
        p Tàng Thư Viện là sân chơi mở và free cho cộng đồng fan kiếm hiệp, tiên hiệp, ngôn tình. Chúc các bạn có những giây phút thư giãn thoải mái sau giờ làm việc và học tập căng thẳng.
        
</template>

<script setup>
import { ref } from "vue";

import BarsIcon from "../assets/svg/bars-solid.svg"
import MobileIcon from "../assets/svg/mobile-screen-button-solid.svg"
import AngleRightIcon from "../assets/svg/angle-right-solid.svg"
import UserIcon from "../assets/svg/user-solid.svg"

const readComicList = ref([
  {
    name: 'Truyen 1',
    chapter: 2
  },
  {
    name: 'Truyen 2',
    chapter: 1
  },
  {
    name: 'Truyen 3',
    chapter: 2
  },
  {
    name: 'Truyen 1',
    chapter: 2
  },
  {
    name: 'Truyen 2',
    chapter: 1
  },
  {
    name: 'Truyen 3',
    chapter: 2
  },
])

const followedComicList = ref([
  {
    name: 'Truyen 13123',
    chapter: 2
  },
  {
    name: 'Truyen 242342',
    chapter: 1
  },
  {
    name: 'Truyen 32342',
    chapter: 2
  },
  {
    name: 'Truyen 1234',
    chapter: 2
  },
  {
    name: 'Truyen Tao Lao',
    chapter: 1
  },
  {
    name: 'Truyen 3',
    chapter: 2
  },
])


</script>

<style lang="stylus" scoped>
  .nav-bar-container
    background-color #2798A1
  .nav-bar-inner
    max-width 1200px
    height 40px
    margin auto
    display flex
    align-items center
    justify-content space-between
    .type-btn, .download-btn
      display flex
      align-items center
      text-decoration none
      p
        color #fff
        margin-left 5px
    .filter-list
      display flex
      align-items center
      height 100%
      a
        height 100%
        text-decoration none
        width 120px
        color #fff
        display inline-flex
        align-items center
        justify-content center
        &:hover
          background-color #077c86
          border-top 2px solid #bf2d27
          border-bottom 2px solid #077c86

  .myFlex-row {
    display flex
    align-items center
    justify-content space-between
  }

  a {
    text-decoration: none
    color #000
  }

  .main
    max-width 1200px
    padding-top 15px
    margin auto

  .section-1
    display flex
    gap 30px
    justify-content space-between
    .largest
      flex 1
      h3
        padding-bottom 4px
        color #1a1a1a
        font-size 18px
        border-bottom 1px solid #666
      .center-container
        margin 15px 0
        padding 0 20px
        .info
          margin-left 10px
          h4 
            text-transform: capitalize
          p 
            margin 15px 0
          button
            outline none
            width 98px
            padding 5px 0
            text-align center
            color #fff
            border 1px solid #bf2c24
            border-radius 15px
            background #bf2c24
            font-size 14px
            &:hover
              opacity 0.8
              cursor pointer
        
    .small
      width 216px
      .title
        padding-bottom 4px
        color #1a1a1a
        font-size 18px
        border-bottom 1px solid #666
    .readComic-item
      height 32px
      display flex
      align-items center
      justify-content space-between
      & + .readComic-item
        border-top 1px solid #ccc
      a
        text-decoration none
        &:hover
          color red
      p 
        color #b3b3b3
  
  .row-3
    gap 30px
    padding 28px 0;
    border-top 3px solid #ebebeb
    .row-3-item
        flex 1
        .numberChapter
          color red
          font-style italic
  
  .section-2
    margin-top 24px
    .row
      padding 15px 0 20px
      gap 15px
      & + .row
        border-top 1px solid #ccc
    .col
      display flex
      img 
        width 72px
        height 96px
        object-fit cover
      .info 
        margin-left 10px

  .footer
    background-color #f8f8f8
    border-top 1px solid #e7e7e7
    color #4E4E4E
    font-size 14px
    padding 20px 0
    .footer-content
      max-width 1200px
      margin auto
      img
        height 60px
      .privacy-content
        margin-left 30px
</style>