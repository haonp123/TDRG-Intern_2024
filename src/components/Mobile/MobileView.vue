<template lang="pug">
div
    //- Search Modal
    .search-modal(v-if="openSearchModal")
        .search-container
            .search-field
                SearchIcon(width="18px" height="18px" fill="#ccc")
                input(type="text" placeholder="Tìm kiếm")
            div(style="display: flex; align-items: center" @click="() => openSearchModal = false")
                BarsIcon(width="18px" height="18px")
        .result-list

    //- Download button fixed
    //- .down-container
    //-     a.download-btn(href="https://play.google.com/store/apps/details?id=com.book.truyen.tangthuvien")
    //-         img(src="/images/ttvapp.png")
    //-         p Tải app TTV để sử dụng đầy đủ chức năng
    .search-btn(@click="() => openSearchModal = true" class="search-btn")
        SearchIcon(width="15px" height="15px" fill="#ccc")
        p Tìm kiếm

    Navbar

    div(style="padding: 6px 0;")
        DownloadBanner
        
    Section(
        title="Truyện mới nhất" 
        :tabList="tabList"
        listType="horizontal"
        :list="updatedComics"
    )

    Section(
        title="Truyện xem nhiều" 
        listType="horizontal"
        :list="viewComics"
    )

    Section(
        title="Truyện đề cử tháng" 
        listType="vertical"
        :list="recommendComics"
    )

    div(style="padding: 6px 0;")
        DownloadBanner      

    Section(
        title="Truyện đã hoàn thành" 
        listType="vertical"
        :list="recommendComics"
    )
        
</template>

<script setup>
import {ref} from "vue"

import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg"
import BarsIcon from "../../assets/svg/bars-solid.svg"
import AngleRightIcon from "../../assets/svg/angle-right-solid.svg"

import Navbar from "./Navbar.vue"
import Section from "./Section.vue"
import DownloadBanner from "../DownloadBanner.vue"

const openSearchModal = ref(false)
const tabList = ['Convert', 'Dịch', 'Ngôn tình']
const updatedComics = [
    {
        name: 'chuyển sinh tiên đạo',
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/e3d81976c5bbe78eab49aa02a41ce92b3e1a579bab6dff0d30ef3628788be69c.jpg',
    },
    {
        name: 'Đạo gia muốn phi thăng (Đạo gia Yếu phi)',
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/c492bf066106c16d38b364db00c574bad0d7b62b023a7e9c16a9217334d744cf.jpg',
    },
    {
        name: 'Trafford mãi gia câu lạc bộ',
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/224a72722626006960a98ed4ed7f8e4d757fdb2657affd85a89433d76e3d2238.jpg',
    },
    {
        name: 'trí mệnh vũ khổ',
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/735dd776417121460da98dccf9ea75d824c2f9354eed9dd9bff23f29c563c1d8.jpg',
    },
]
const viewComics = [
    {
        name: 'Ai Bảo Hắn Tu Tiên! (Thùy Nhượng Tha Tu Tiên Đích!)',
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/8892c8a938decacff62e6a628929313be2eed61cf650b1b01ed70104115b2171.jpg',
    },
    {
        name: 'Khai Cục Nữ Ma Đầu Phụ Ta (Khai Cục Nữ Ma Đầu Phụ Liễu Ngã)',
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/07e19df92fc1c25c2346c010df7972eec4a6115b6442268c281c268739e73283.jpg',
    },
    {
        name: 'Túc Mệnh Chi Hoàn',
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/74af7cf85a45f4683a316695b2a925da74f632e6a09426a5ed85e59847fd9397.jpg',
    },
    {
        name: 'Đạo Gia Muốn Phi Thăng (Đạo Gia Yếu Phi Thăng)',
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/c492bf066106c16d38b364db00c574bad0d7b62b023a7e9c16a9217334d744cf.jpg',
    },
]
const recommendComics = [
    {
        name: 'Luân hồi lạc viên',
        type: 'Đồng nhân',
        author: 'Na Nhất Chích văn tử',
        views: 3555,
        status: 'Chưa hoàn thành',
        numberOfChapter: 412,
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/99d2aa117de6f54b06b64cbbebef2b435336977dfee71f2ee5766d48b31734f3.jpg'
    },
    {
        name: 'tâm linh chúa tể',
        type: 'Tiên hiệp',
        author: 'Cô độc phiêu lưu',
        views: 826650,
        status: 'Chưa hoàn thành',
        numberOfChapter: 1072,
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/51a5b0e5a51e0e927c6e86d2655cfbddb87575d93b7d81ad5a28013ba9de6e1b.jpg'
    },
    {
        name: 'Luân hồi lạc viên',
        type: 'Đồng nhân',
        author: 'Na Nhất Chích văn tử',
        views: 3555,
        status: 'Chưa hoàn thành',
        numberOfChapter: 412,
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/99d2aa117de6f54b06b64cbbebef2b435336977dfee71f2ee5766d48b31734f3.jpg'
    },
    {
        name: 'tâm linh chúa tể',
        type: 'Tiên hiệp',
        author: 'Cô độc phiêu lưu',
        views: 826650,
        status: 'Chưa hoàn thành',
        numberOfChapter: 1072,
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/51a5b0e5a51e0e927c6e86d2655cfbddb87575d93b7d81ad5a28013ba9de6e1b.jpg'
    },
    {
        name: 'Luân hồi lạc viên',
        type: 'Đồng nhân',
        author: 'Na Nhất Chích văn tử',
        views: 3555,
        status: 'Chưa hoàn thành',
        numberOfChapter: 412,
        imageUrl: 'https://nae.vn/ttv/ttv/public/images/story/99d2aa117de6f54b06b64cbbebef2b435336977dfee71f2ee5766d48b31734f3.jpg'
    },
]


</script>

<style lang="stylus" scoped>
    .search-btn 
        display flex
        align-items center
        justify-content center
        background-color #fff
        padding 6px
        margin 10px 12px
        border-radius 5px
        p 
            font-size 13px
            color #555
            margin-left 5px
  
    .search-modal 
        position fixed
        z-index 1
        background-color #fff
        top 0
        left 0
        right 0
        bottom 0
        padding 12px
  
    .search-container 
        display flex
        align-items center
  
    .search-field 
        display flex
        flex 1
        background-color #f6f7f9
        padding 6px 12px
        border-radius 5px
        margin-right 10px
        input 
            flex 1
            border none
            background-color transparent
            outline none
            margin-left 5px
  
    .down-container
        position fixed
        bottom 10px
        z-index 1
        width 100%
        .download-btn
            text-decoration none
            height 48px
            display flex
            align-items center
            justify-content center
            background-color #339a99
            margin 0 15px
            border-radius 10px
            img
                width 35px
                height 35px
            p
                color #fff
                font-size 14px
                margin-left 5px

</style>