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

    .down-container
        a.download-btn(href="https://play.google.com/store/apps/details?id=com.book.truyen.tangthuvien")
            img(src="/images/ttvapp.png")
            p Tải app TTV để sử dụng đầy đủ chức năng
        
    .search-btn(@click="() => openSearchModal = true" class="search-btn")
        SearchIcon(width="15px" height="15px" fill="#ccc")
        p Tìm kiếm

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
        
    a.download-link(href="https//truyen.tangthuvien.vn/tai-app")
        img(src="/images/banner-app-ttv.jpg" alt="")   
        
    .section
        .section-header
            h3 truyện mới cập nhật
            a.more-btn(href="https://m.truyen.tangthuvien.vn/moi-cap-nhat")
                p xem thêm
                AngleRightIcon(width="14px" height="14px" fill="gray")
        .section-tab
            .tab-inner
                p(@click="() => currentTab = tab" :class="tab === currentTab ? ['tab-item', 'tab-active'] : 'tab-item'" v-for="tab in tabList" :key="tab") {{ tab }}

        .section-comics-X
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/1eeed3ff0831e457806f1a75c96404bc45533907866f3c55c5a67ad8eecffe1b.jpg")
                p.comic-name Túc Cầu: Thần Cấp Trung Tràng, Harland Kinh Ngốc (Thần Cấp Trung Tràng, Cáp Lan Đức Kinh Ngốc)
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/1eeed3ff0831e457806f1a75c96404bc45533907866f3c55c5a67ad8eecffe1b.jpg")
                p.comic-name Túc Cầu: Thần Cấp Trung Tràng, Harland Kinh Ngốc (Thần Cấp Trung Tràng, Cáp Lan Đức Kinh Ngốc)
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/1eeed3ff0831e457806f1a75c96404bc45533907866f3c55c5a67ad8eecffe1b.jpg")
                p.comic-name Túc Cầu: Thần Cấp Trung Tràng, Harland Kinh Ngốc (Thần Cấp Trung Tràng, Cáp Lan Đức Kinh Ngốc)
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/1eeed3ff0831e457806f1a75c96404bc45533907866f3c55c5a67ad8eecffe1b.jpg")
                p.comic-name Túc Cầu: Thần Cấp Trung Tràng, Harland Kinh Ngốc (Thần Cấp Trung Tràng, Cáp Lan Đức Kinh Ngốc)

    .section
        .section-header
            h3 truyện xem nhiều
            a.more-btn(href="https://m.truyen.tangthuvien.vn/moi-cap-nhat")
                p xem thêm
                AngleRightIcon(width="14px" height="14px" fill="gray")
            
        .section-comics-X
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/07e19df92fc1c25c2346c010df7972eec4a6115b6442268c281c268739e73283.jpg")
                p.comic-name Túc Cầu: Thần Cấp Trung Tràng, Harland Kinh Ngốc (Thần Cấp Trung Tràng, Cáp Lan Đức Kinh Ngốc)
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/07e19df92fc1c25c2346c010df7972eec4a6115b6442268c281c268739e73283.jpg")
                p.comic-name Túc Cầu: Thần Cấp Trung Tràng, Harland Kinh Ngốc (Thần Cấp Trung Tràng, Cáp Lan Đức Kinh Ngốc)
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/07e19df92fc1c25c2346c010df7972eec4a6115b6442268c281c268739e73283.jpg")
                p.comic-name Túc Cầu: Thần Cấp Trung Tràng, Harland Kinh Ngốc (Thần Cấp Trung Tràng, Cáp Lan Đức Kinh Ngốc)
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/07e19df92fc1c25c2346c010df7972eec4a6115b6442268c281c268739e73283.jpg")
                p.comic-name Túc Cầu: Thần Cấp Trung Tràng, Harland Kinh Ngốc (Thần Cấp Trung Tràng, Cáp Lan Đức Kinh Ngốc)

    .section
        .section-header
            h3 truyện đề cử tháng
            a.more-btn(href="https://m.truyen.tangthuvien.vn/moi-cap-nhat")
                p xem thêm
                AngleRightIcon(width="14px" height="14px" fill="gray")
        .section-comics-Y
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/877d54f5b01cedf5da631af873e80e3af9cf4f32fb09c8d6237f7193ccf8dacf.jpg")
                .comic-detail
                    h4 [Dịch] Kiếm lai - tàng thư viện
                    p.info Thể loại: Tiên Hiệp 
                    p.info Tác giả: Phong Hỏa Hí Chư Hầu
                    p.status Lượt xem: 9999
                    p.status Tình trạng: Chưa hoàn thành
                    p.status Số chương: 414
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/877d54f5b01cedf5da631af873e80e3af9cf4f32fb09c8d6237f7193ccf8dacf.jpg")
                .comic-detail
                    h4 [Dịch] Kiếm lai - tàng thư viện
                    p.info Thể loại: Tiên Hiệp 
                    p.info Tác giả: Phong Hỏa Hí Chư Hầu
                    p.status Lượt xem: 9999
                    p.status Tình trạng: Chưa hoàn thành
                    p.status Số chương: 414
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/877d54f5b01cedf5da631af873e80e3af9cf4f32fb09c8d6237f7193ccf8dacf.jpg")
                .comic-detail
                    h4 [Dịch] Kiếm lai - tàng thư viện
                    p.info Thể loại: Tiên Hiệp 
                    p.info Tác giả: Phong Hỏa Hí Chư Hầu
                    p.status Lượt xem: 9999
                    p.status Tình trạng: Chưa hoàn thành
                    p.status Số chương: 414
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/877d54f5b01cedf5da631af873e80e3af9cf4f32fb09c8d6237f7193ccf8dacf.jpg")
                .comic-detail
                    h4 [Dịch] Kiếm lai - tàng thư viện
                    p.info Thể loại: Tiên Hiệp 
                    p.info Tác giả: Phong Hỏa Hí Chư Hầu
                    p.status Lượt xem: 9999
                    p.status Tình trạng: Chưa hoàn thành
                    p.status Số chương: 414
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/877d54f5b01cedf5da631af873e80e3af9cf4f32fb09c8d6237f7193ccf8dacf.jpg")
                .comic-detail
                    h4 [Dịch] Kiếm lai - tàng thư viện
                    p.info Thể loại: Tiên Hiệp 
                    p.info Tác giả: Phong Hỏa Hí Chư Hầu
                    p.status Lượt xem: 9999
                    p.status Tình trạng: Chưa hoàn thành
                    p.status Số chương: 414

    a.download-link(href="https//truyen.tangthuvien.vn/tai-app")
        img(src="/images/banner-app-ttv.jpg" alt="")         

    .section
        .section-header
            h3 truyện đã hoàn thành
            a.more-btn(href="https://m.truyen.tangthuvien.vn/moi-cap-nhat")
                p xem thêm
                AngleRightIcon(width="14px" height="14px" fill="gray")
        .section-comics-Y
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/09f524f4cbb922f4ecca5611c7704e609ea32ff75752ee6dbafc4036dfe63dd9.jpg")
                .comic-detail
                    h4 Ngã đích tiền thế mô nghĩ khí
                    p.info Thể loại: Khoa Huyễn 
                    p.info Tác giả: Hồng Nhan Tam Thiên
                    p.status Lượt xem: 1556
                    p.status Số chương: 320
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/09f524f4cbb922f4ecca5611c7704e609ea32ff75752ee6dbafc4036dfe63dd9.jpg")
                .comic-detail
                    h4 Ngã đích tiền thế mô nghĩ khí
                    p.info Thể loại: Khoa Huyễn 
                    p.info Tác giả: Hồng Nhan Tam Thiên
                    p.status Lượt xem: 1556
                    p.status Số chương: 320
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/09f524f4cbb922f4ecca5611c7704e609ea32ff75752ee6dbafc4036dfe63dd9.jpg")
                .comic-detail
                    h4 Ngã đích tiền thế mô nghĩ khí
                    p.info Thể loại: Khoa Huyễn 
                    p.info Tác giả: Hồng Nhan Tam Thiên
                    p.status Lượt xem: 1556
                    p.status Số chương: 320
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/09f524f4cbb922f4ecca5611c7704e609ea32ff75752ee6dbafc4036dfe63dd9.jpg")
                .comic-detail
                    h4 Ngã đích tiền thế mô nghĩ khí
                    p.info Thể loại: Khoa Huyễn 
                    p.info Tác giả: Hồng Nhan Tam Thiên
                    p.status Lượt xem: 1556
                    p.status Số chương: 320
            a.comic-item
                img(src="https://nae.vn/ttv/ttv/public/images/story/09f524f4cbb922f4ecca5611c7704e609ea32ff75752ee6dbafc4036dfe63dd9.jpg")
                .comic-detail
                    h4 Ngã đích tiền thế mô nghĩ khí
                    p.info Thể loại: Khoa Huyễn 
                    p.info Tác giả: Hồng Nhan Tam Thiên
                    p.status Lượt xem: 1556
                    p.status Số chương: 320
        
</template>

<script setup>
import { ref } from "vue";

import SearchIcon from "../assets/svg/magnifying-glass-solid.svg"
import BarsIcon from "../assets/svg/bars-solid.svg"
import AngleRightIcon from "../assets/svg/angle-right-solid.svg"

const openSearchModal = ref(false)
const currentTab = ref('Convert')
const tabList = ['Convert', 'Dịch', 'Ngôn tình'];

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
  
    .download-link
        width 100%
        img
            width 100%
            margin 10px 0

    .section
        padding 6px
        background-color #fff
    .section-header
        padding 6px 
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
     
    .section-comics-X
        display flex
        gap 10px
        margin-top 10px
        .comic-item
        img 
            width 100%
        p
            margin 3px 0 2px
            font-size 13px
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 3 
            line-clamp 3
            -webkit-box-orient vertical
            color #333

    .section-comics-Y
        margin-top 10px
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
                .info
                    color #969ba3
                    font-size 12px
                .status
                    font-size 13px
                    color #33373d
</style>