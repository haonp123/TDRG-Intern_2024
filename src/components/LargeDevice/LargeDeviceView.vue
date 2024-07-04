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
    .section-0
      .type-list
        .type-row
          .type-item
            StartBookIcon(width="24px" height="24px" fill="")
            .type-info 
              p.type-name Tiên Hiệp 
              p.type-number 2018
          .type-item
            StartBookIcon(width="24px" height="24px" fill="")
            .type-info 
              p.type-name Tiên Hiệp 
              p.type-number 2018
        .type-row
          .type-item
            StartBookIcon(width="24px" height="24px" fill="")
            .type-info 
              p.type-name Tiên Hiệp 
              p.type-number 2018
          .type-item
            StartBookIcon(width="24px" height="24px" fill="")
            .type-info 
              p.type-name Tiên Hiệp 
              p.type-number 2018
      .center-slide
        SlideShow
        .top-list
          .top-item(style="background-image: url('/images/cover2.jpg'); background-position: center; background-repeat: no-repeat; background-size:cover")
            .top-title(style="background-color: #bf2c24")
              p No.1
              p Converter
            .top-info 
              img(src="https://www.nae.vn/ttv/ttv/public/images_user/b3022d252d733397227a2ad98a824b4047ce6907744d0c2e693baa299b24382b.jpg")
              p.name hanals
          .top-item(style="background-image: url('/images/cover5.jpg'); background-position: center; background-repeat: no-repeat; background-size:cover")
            .top-title(style="background-color: #327c86")
              p No.1
              p Đại gia
            .top-info 
              img(src="https://www.nae.vn/ttv/ttv/public/images_user/120722.png")
              p.name hanals
          .top-item(style="background-image: url('/images/cover1.jpg'); background-position: center; background-repeat: no-repeat; background-size:cover")
            .top-title(style="background-color: #a3af1e")
              p No.1
              p Tiêu phí
            .top-info 
              img(src="https://truyen.tangthuvien.vn/images/default-avatar.jpeg")
              p.name hanals
      .news-container
        .title Tin tức
        ul
          li
            a(href="") Đăng ký convert
          li
            a(href="") Bảng lương convert
          li
            a(href="") Kiếm tiền với Tàng Thư Viện
          li
            a(href="") Các đơn vị tiền tệ
          li
            a(href="") Các bước trở thành một Converter - Không cần...
        .notification
          VolumeIcon(width="15px" height="15px" fill="red")
          a(href="") TTV Translate - Ứng dụng convert truyện trên mobile
        .notification
          VolumeIcon(width="15px" height="15px" fill="red")
          a(href="") Tàng Thư Viện hỗ trợ chi phí cho converter, dịch...

    .section.row-gap30
      .section-item.section-item-normal
        ItemTitle(title="truyện mới xem") 
        ul.comic-list
          li(v-for="comic in readComicList")
            a(href="") {{ comic.name }}
            p Chương {{ comic.chapter }}
      .section-item-largest
        ItemTitle(title="biên tập viên đề cử") 
        .recommendSlide-container
          .slide-container
            img(src="https://www.nae.vn/ttv/ttv/public/images/story/58eb5ded55896a866bf73548fde254e2a7f27c976ab1ac70b9f424e1e415593a.jpg")
            .dot-list
              .dot-item
              .dot-item
              .dot-item
              .dot-item
              .dot-item 
          .comic-info
            h4 tuyệt cảnh hắc dạ
            p Bên ngoài tất cả đều là quái vật quỷ ảnh, ta thật sợ hãi. Chỉ nghĩ ...
            button  Đọc truyện

        .recommend-list(style="display: grid; grid-template-columns: auto auto auto; column-gap: 30px;")
          .recommend-item(v-for="comic in recommendComicList")
            p.name {{ comic.name }}
            p.number-chapter {{ comic.numberOfChapter }}
              i chương 
            p.description {{ comic.description }}
      
      .section-item.section-item-normal
        ItemTitle(title="đang theo dõi" content="tất cả") 
        ul.comic-list
          li(v-for="comic in readComicList")
            a(href="") {{ comic.name }}
            p Chương {{ comic.chapter }}

    div(style="margin: 40px 0")
      a(href="https://truyen.tangthuvien.vn/tai-app" target="_blank")
        img(src="/images/banner-app-ttv.jpg")
    
    .section.row-gap30
      .row-item-equal
        ItemTitle(title="đề cử" content="tất cả")
        .top-list
          .top-1
            .info
              div
                span.tag No.1
              a(href="").name {{ mostRecommendList[0].name }}
              .number {{ mostRecommendList[0].number }}
                p Đề cử
              .more
                p.type {{ mostRecommendList[0].type }}
                p.author {{ mostRecommendList[0].author }}
            a.image-link(href="")
              img(:src="mostRecommendList[0].imageUrl")
          div(v-for="(item, index) in mostRecommendList")
            .top-item(v-if="index > 0")
              .order
                p {{ index + 1  }}
              .more-info
                a.name(href="") {{ item.name }}
                .number {{ item.number }}
      .row-item-equal
        ItemTitle(title="đề cử" content="tất cả")
        .top-list
          .top-1
            .info
              div
                span.tag No.1
              a(href="").name {{ mostRecommendList[0].name }}
              .number {{ mostRecommendList[0].number }}
                p Đề cử
              .more
                p.type {{ mostRecommendList[0].type }}
                p.author {{ mostRecommendList[0].author }}
            a.image-link(href="")
              img(:src="mostRecommendList[0].imageUrl")
          div(v-for="(item, index) in mostRecommendList")
            .top-item(v-if="index > 0")
              .order
                p {{ index + 1  }}
              .more-info
                a.name(href="") {{ item.name }}
                .number {{ item.number }}
      .row-item-equal
        ItemTitle(title="đề cử" content="tất cả")
        .top-list
          .top-1
            .info
              div
                span.tag No.1
              a(href="").name {{ mostRecommendList[0].name }}
              .number {{ mostRecommendList[0].number }}
                p Đề cử
              .more
                p.type {{ mostRecommendList[0].type }}
                p.author {{ mostRecommendList[0].author }}
            a.image-link(href="")
              img(:src="mostRecommendList[0].imageUrl")
          div(v-for="(item, index) in mostRecommendList")
            .top-item(v-if="index > 0")
              .order
                p {{ index + 1  }}
              .more-info
                a.name(href="") {{ item.name }}
                .number {{ item.number }}
      .row-item-equal
        ItemTitle(title="đề cử" content="tất cả")
        .top-list
          .top-1
            .info
              div
                span.tag No.1
              a(href="").name {{ mostRecommendList[0].name }}
              .number {{ mostRecommendList[0].number }}
                p Đề cử
              .more
                p.type {{ mostRecommendList[0].type }}
                p.author {{ mostRecommendList[0].author }}
            a.image-link(href="")
              img(:src="mostRecommendList[0].imageUrl")
          div(v-for="(item, index) in mostRecommendList")
            .top-item(v-if="index > 0")
              .order
                p {{ index + 1  }}
              .more-info
                a.name(href="") {{ item.name }}
                .number {{ item.number }}

    .section
      ItemTitle(title="truyện mới" content="xem thêm")
      .row-gap30
        .section-item-normal
          .special-comic
            img(src="https://www.nae.vn/ttv/ttv/public/images/story/1dadbc2bebdca51c03f22eb8cf2dab87b29fd16adb77a5759240060a9b98dc32.jpg")
            p.name Ngã Đích Hoàn Mỹ Mạt Thế Nhân Sinh
            p.author trường kình quy hải
            .numberChapter 15
              p chương
            .description "Nguyên tên sách: 《 cũng mạt thế, hoàn mỹ nhân sinh hệ thống mới đến? 》 "Mạnh..
        .newComic-list
          .newComic-item(v-for="comic in newComicList")
            .image-container
              img(:src="comic.imageUrl")
            .info
              .name {{ comic.name }}
              .description {{ comic.description }}
              .more-info 
                .author
                  UserIcon(width="15px" height="15px" fill="#ccc")
                  p {{ comic.author }}
                .type-link {{ comic.type }}

    .section.row-gap30
      .section-item.section-item-normal
        ItemTitle(title="top converters") 
        .top-list
          .top-1
            .info
              div
                span.tag No.1
              a(href="").name {{ userTopList[0].name }}
              .number {{ userTopList[0].number }}
                p chương
            a.image-link(href="")
              img(:src="userTopList[0].imageUrl")
          div(v-for="(item, index) in userTopList")
            .top-item(v-if="index > 0")
              .order
                p {{ index + 1  }}
              .more-info
                a.name(href="") {{ item.name }}
                .number {{ item.number }}
      .section-item-largest
        ItemTitle(title="mới cập nhật" content="xem thêm") 
        table.updated-table
          tr(v-for="comic in updatedComicList")
            td.type {{ comic.type }}
            td.name {{ comic.name }}
            td.chapter Chương {{ comic.chapter }}
            td.author {{ comic.author }}
            td.time {{ comic.time }}

      
      .section-item.section-item-normal
        ItemTitle(title="top converters") 
        .top-list
          .top-1
            .info
              div
                span.tag No.1
              a(href="").name {{ userTopList[0].name }}
              .number {{ userTopList[0].number }}
                p chương
            a.image-link(href="")
              img(:src="userTopList[0].imageUrl")
          div(v-for="(item, index) in userTopList")
            .top-item(v-if="index > 0")
              .order
                p {{ index + 1  }}
              .more-info
                a.name(href="") {{ item.name }}
                .number {{ item.number }}

    div(style="margin: 40px 0")
      a(href="https://truyen.tangthuvien.vn/tai-app" target="_blank")
        img(src="/images/banner-app-ttv.jpg")

    .section
      ItemTitle(title="truyện đã hoàn thành" content="xem thêm")
      .row-gap30
        .section-item-normal
          .special-comic
            img(src="https://www.nae.vn/ttv/ttv/public/images/story/09f524f4cbb922f4ecca5611c7704e609ea32ff75752ee6dbafc4036dfe63dd9.jpg")
            p.name Ngã Đích Tiền Thế Mô Nghĩ Khí
            p.author hồng nhan tam thiên
            .numberChapter 380
              p chương
            .description Mong các đạo hữu ủng hộ truyện và Converter bằng các cách sau: - Vote 5*, bấm...
        .newComic-list
          .newComic-item(v-for="comic in newComicList")
            .image-container
              img(:src="comic.imageUrl")
            .info
              .name {{ comic.name }}
              .description {{ comic.description }}
              .more-info 
                .author
                  UserIcon(width="15px" height="15px" fill="#ccc")
                  p {{ comic.author }}
                .type-link {{ comic.type }}

</template>

<script setup>
import { ref } from "vue";

import BarsIcon from "../../assets/svg/bars-solid.svg"
import MobileIcon from "../../assets/svg/mobile-screen-button-solid.svg"
import AngleRightIcon from "../../assets/svg/angle-right-solid.svg"
import UserIcon from "../../assets/svg/user-solid.svg"
import StartBookIcon from "../../assets/svg/book-tanakh-solid.svg"
import VolumeIcon from "../../assets/svg/volume-high-solid.svg"

import SlideShow from "../SlideShow.vue"
import ItemTitle from "./ItemTitle.vue"

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

const typeList = [
		{name: "Tiên hiệp",
      number: 2234
    },
		{name: "Kiếm hiệp",
      number: 322
    },
		{name: "Ngôn tình",
      number: 23241
    },
		{name: "Huyền huyễn",
      number: 123
    },
		{name: "Đô thị",
      number: 234
    },
		{name: "Quân sự",
      number: 423
    },
		{name: "Lịch sử",
      number: 242
    },
		{name: "Trinh thám",
      number: 232
    },
		{name: "Cổ đại",
      number: 2324
    },
		{name: "Xuyên không",
      number: 42323
    },
		{name: "Lãng mãn",
      number: 242
    },
		{name: "Khoa học",
      number: 546
    }
	]

const newComicList = [
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
  {
    name: "Địa Trung Hải Phách Chủ Chi Lộ",
    description: '"Một bộ đế quốc Bulgaria ra đời sử, một bộ Balkans nước nhỏ phấn đấu...',
    author: 'Tân Hải Nguyệt1',
    type: 'Lịch sử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/c70e6ad624101c60ead30601f743c66b08a31942922a0b77b425492fd46694ae.jpg'
  },
]

const recommendComicList = [
  {
    name: "Luân hồi lạc viên",
    numberOfChapter: 4170,
    description: 'Hỗn Độn chân giới bị Ma Uyên chân giới mở thông đạo xâm lấn...'
  },
  {
    name: "Tâm linh chúa tể",
    numberOfChapter: 1073,
    description: 'Hỗn Độn chân giới bị Ma Uyên chân giới mở thông đạo xâm lấn...'
  },
  {
    name: "khai cục nữ ma đầu phụ ta",
    numberOfChapter: 1417,
    description: 'Lưu ý: Truyện thuộc "cẩu đạo" nên sẽ RẤT nhiều "NƯỚC". Cân nhắc...'
  },
  {
    name: "vô thượng thiên tôn",
    numberOfChapter: 139,
    description: 'Tương lai trái đất, nhân loại đi vào vũ trụ thực dân các tinh cầu,...'
  },
  {
    name: "đạo gia muốn phi thăng",
    numberOfChapter: 546,
    description: 'Tác phẩm tóm tắt “Đệ tử Lê Uyên, bái cầu thanh thiên thụ...'
  },
  {
    name: "[dịch] thanh niên nhàn rỗi",
    numberOfChapter: 431,
    description: 'Thanh Niên Nhàn Rỗi Ở Đường Triều (tên gốc Đường Triều Tiểu Nhàn...'
  },
]

const mostRecommendList = [
  {
    name: 'luân hồi lạc viên',
    number: 50,
    type: 'đồng nhân',
    author: 'na nhất chích văn tử',
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images/story/99d2aa117de6f54b06b64cbbebef2b435336977dfee71f2ee5766d48b31734f3.jpg'
  },
  {
    name: 'khai cục nữ ma đầu phụ ta',
    number: 27,
  },
  {
    name: 'vô thượng thiên tôn',
    number: 22,
  },
  {
    name: 'đạo gia muốn phi thăng',
    number: 13
  },
  {
    name: 'tâm linh chúa tể',
    number: 10,
  },
  {
    name: 'khai cục nữ ma đầu phụ ta',
    number: 9,
  },
  {
    name: 'vô thượng thiên tôn',
    number: 8,
  },
  {
    name: 'đạo gia muốn phi thăng',
    number: 7
  },
  {
    name: 'đạo gia muốn phi thăng',
    number: 6
  },
  {
    name: 'đạo gia muốn phi thăng',
    number: 3
  },
]

const userTopList = [
  {
    name: 'hanals',
    number: 709,
    imageUrl: 'https://www.nae.vn/ttv/ttv/public/images_user/b3022d252d733397227a2ad98a824b4047ce6907744d0c2e693baa299b24382b.jpg'
  },
  {
    name: 'vohansat',
    number: 637
  },
  {
    name: 'nguoithanbi',
    number: 316
  },
  {
    name: 'lanh_phong',
    number: 288
  },
  {
    name: 'vohansat',
    number: 637
  },
  {
    name: 'vohansat',
    number: 637
  },
  {
    name: 'vohansat',
    number: 637
  },
  {
    name: 'vohansatsfsd',
    number: 637
  },
  {
    name: 'vohansat',
    number: 637
  },
  {
    name: 'vohaaasnsat',
    number: 637
  },
]

const updatedComicList = [
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
  {
    type: 'tiên hiệp',
    name: 'Chuyển sinh tiên đạo',
    chapter: 77,
    author: 'lưu thủy thiên tái',
    time: '20:41 03/07'
  },
]

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


  a {
    text-decoration: none
    color #000
  }

  .row-gap30
    display flex
    align-items flex-start
    gap 30px
  .row-gap15
    display flex
    align-items flex-start
    gap 15px
  .section-item-normal
    width 216px
  .row-item-equal,
  .section-item-largest
    flex 1
    

  .main
    max-width 1200px
    padding-top 15px
    margin auto

  .section-0
    display flex
    align-items flex-start
    .type-list
      width 280px
      border 1px solid #e6e6e6
      .type-row
        display flex
        justify-content space-between
        background-color #f7f6f2
        padding 16px
        &:nth-child(even)
          background-color #fcfcfa
        .type-item
          display flex
          align-items center
          .type-info
            margin-left 8px
            .type-name
              font-size 14px
            .type-number
              font-size 12px
              color #999999
    .center-slide
      flex 1
      .top-list
        display flex
        padding 0 12px
        .top-item
          flex 1
          overflow hidden
          display flex
          align-items center
          justify-content center
          position relative
          padding 10px
          .top-title
            position absolute
            right -50px
            top -40px
            color #fff
            transform rotate(40deg)
            text-align center
            padding 50px 32px 5px
            font-size 11px
            font-weight 600
          .top-info
            text-align center
            color #fff
            img
              width 80px
              height 80px
              border-radius 50%
              box-shadow 1px 2px 10px #d9d4c7;

    .news-container
      width 220px
      border 1px solid #e6e6e6
      background-color #fcfcfa
      a
        &:hover
          color red
      .title
        padding 10px
        font-size 16px
        font-weight 700
        text-align center
      ul
        list-style-position inside
        li
          padding 10px
          font-size 14px
          color #262626
          &:nth-child(odd)
            background-color #f7f6f2
          &::marker
            color #666
            margin-right 10px
      .notification
        display flex
        align-items flex-start
        padding 10px
        &:nth-child(even)
          background-color #f7f6f2
        a
          flex 1
          font-size 14px
          margin-left 5px

  .section
    margin-bottom 40px
    .recommendSlide-container
      display flex
      padding 30px 0
      .slide-container
        flex 1
        img
          height 120px
          width 90px
          object-fit cover
        .dot-list
          display flex
          justify-content center
          .dot-item
            width 10px
            height 10px
            border-radius 50%
            background-color red
            margin-left 5px
      .comic-info
        width 390px
        h4
          font-size 18px
          text-transform capitalize
        p
          color #666
          font-size 14px
          margin-bottom 15px
        button
          border none
          color #fff
          background-color #bf2c24
          padding 10px 10px
          text-align center
          border-radius 10px
  .section-item
    .comic-list
      list-style-type none
      li 
        display flex
        padding 5px 0
        & + li
          border-top 1px solid #b3b3b3
        a
          flex 1
          &:hover
            color red
        p
          width 84px
          color #b3b3b3
          text-align right
  .recommend-list
    .recommend-item
      padding 37px 0
      .name
        font-size 16px
        color #1a1a1a
        text-transform capitalize
      .number-chapter
        color #bf2c24
        font-size 16px
        font-weight 700
        font-style italic
        margin 2px 0 4px
        i
          margin-left 3px
          font-weight 400
          vertical-align middle
      .description
        font-size 12px
        color #666666
  

  .top-list
    .top-1
      display flex
      padding 15px 0
      .info
        flex 1
        .tag
          color #fff
          font-size 14px
          padding 5px
          background-color #bf2c24
        .name
          text-transform capitalize
          margin 5px 0
          display block
          font-size 16px
        .number
          display flex
          align-items flex-end
          color #bf2c24
          font-size 18px
          p
            font-size 12px
            margin-left 3px
        .more
          display flex
          color #a6a6a6
          font-size 12px
          text-transform capitalize
          p
           & + p
            margin-left 10px
      .image-link
        img
          width 52px
          height 87px
          object-fit cover
    .top-item
      display flex
      align-items center
      .order
        width 30px
        display flex
        align-item center
        justify-content center
        p
          color #000
          font-size 14px
          width 20px
          text-align center
          background-color #ededed
      .more-info
        flex 1
        display flex
        padding 5px 0
        border-top 1px solid #e6e6e6
        .name
          flex 1
          text-transform capitalize
          &:hover
            color red
        .number
          text-align right
          width 42px
          color #b3b3b3
  .special-comic
    display flex
    flex-direction column
    align-items center
    background-color #f7f5f0
    padding 20px 10px
    img 
      width 156px
    .name
      text-align center
      font-size 16px
      font-weight 700
      margin 5px 0
      text-transform capitalize
    .author
      color #bf2c24
      font-size 12px
      text-transform capitalize
    .numberChapter
      display flex
      align-items flex-end
      font-size 18px
      color #666
      p
        margin-left 3px
        font-size 12px
    .description
      font-size 12px
      color #626260
      margin-top 10px
  .newComic-list
    margin-top 20px
    display grid
    grid-template-columns auto auto auto
    column-gap 15px
    row-gap 30px
    .newComic-item
      display flex
      .image-container
        width 72px
        overflow hidden
        &:hover
          img
            transform scale(1.1)
        img
          width 100%
          height 100%
          object-fit cover
          transition: all .2s ease-in-out
      .info 
        flex 1
        margin-left 10px
        .name
          font-size 16px
          &:hover
            color red
        .description
          font-size 12px
          margin 10px 0
          color: #666
        .more-info
          display flex
          justify-content space-between
          .author
            display flex
            align-items center
            color #a6a6a6
            font-size 12px
          .type-link
            color #a6a6a6
            padding 3px 5px
            border 1px solid #bfbfbf
  
  .updated-table
    width 100%
    tr
      td
        padding 5px 0
        border-bottom 1px solid #ccc
      .type
        color #808080
        text-transform capitalize
      .name
        text-transform capitalize
      .time
        text-align right
      .chapper
        color #6666
      .author
        color #999999
        text-transform capitalize

</style>