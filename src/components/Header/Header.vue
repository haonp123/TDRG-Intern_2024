<template lang="pug">
.header
    //- Login Modal
    LoginModal(v-if="openLogModal" :handleClick="toggleOpenLogModal")

    .logo-mobile
        router-link.logo-text(:to="{name: 'Home'}") Tàng thư viện
        router-link.forum-link(:to="{name: 'Forum'}") Diễn đàn

    router-link.logo-large(:to="{name: 'Home'}")

    .search-bar
        input(type="text" placeholder="Nhập tên truyện hoặc tác giả...")
        button
            SearchIcon(width="15px" height="15px" fill="#fff")
    
    .header-right
        a.download-link(href="https//play.google.com/store/apps/details?id=com.book.truyen.tangthuvien")
            DownloadIcon(width="15px" height="15px" fill="#fff")
            p App
        router-link(style="display: flex; align-Items: center" :to="{name: 'Login'}")
            UserIcon(width="15px" height="15px" fill="#ed424b")

    button.account-btn(@click="toggleOpenLogModal" @mouseover="$event => bookmarkColor = '#fff'", @mouseleave="$event => bookmarkColor = '#000'")
        BookmarkIcon(width="16px" height="16px" :fill="bookmarkColor")
        p Tài khoản
</template>

<script setup>
import {ref} from 'vue'

import DownloadIcon from "../../assets/svg/download-solid.svg"
import UserIcon from "../../assets/svg/user-solid.svg"
import SearchIcon from "../../assets/svg/magnifying-glass-solid.svg"
import BookmarkIcon from "../../assets/svg/book-bookmark-solid.svg"
import CloseIcon from "../../assets/svg/xmark-solid.svg"

import LoginModal from './LogModal.vue'

const bookmarkColor = ref('#000')

const openLogModal = ref(false)

function toggleOpenLogModal() {
    openLogModal.value = !openLogModal.value
}


</script>

<style lang="stylus" scoped>
.log-modal
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 10
    background-color rgba(0,0,0, 0.3)
    display flex
    align-items center
    justify-content center
    .login-content
        background-color #fff
        width 500px
        .close-btn
            float right
            margin 5px
        .log-select
            margin 16px 32px 0
            display flex
        form
            margin 16px 32px
            .input-field
                display flex
                align-items center
                margin-top 16px
                border 1px solid #ccc
                padding 10px
                input
                    outline none
                    border none
                    margin-left 5px
            a
                display block
                text-decoration none
                text-align right
                margin 16px 0
            button
                width 100%
                border none
                outline none
                padding 10px
                color #fff
                background-color #bf2c24




.header 
    padding 12px
    display flex
    justify-content space-between
    align-items center


.logo-large 
    display none


.logo-text 
    font-size 17px
    margin-right 10px
    font-weight 500
    text-decoration none
    color #000


.forum-link 
    font-size 13px
    text-align center
    color #ed424b
    line-height 1.5rem
    padding 5px 12px
    border-radius 4px
    border 1px solid #ed424b
    text-decoration none


.search-bar 
    display none


.header-right 
    display flex
    align-items center


.download-link 
    display flex
    align-items center
    margin-right 10px
    background-color #339a99
    padding 5px 8px
    text-decoration none
    border-radius 3px


.download-link p 
    font-size 13px    
    margin-left 5px
    color #fff


.account-btn 
    display none


@media screen and (min-width 768px) 
    .header 
        height 84px
        max-width 1200px
        margin auto
        padding 0
    
    .logo-mobile 
        display none
    
    .logo-large 
        display block
        width 219px
        height 52px
        background url('/images/logo-web.png') no-repeat
        background-size 100%
    
    .search-bar 
        display flex
        align-items center
    
    .search-bar input 
        font-size 14px
        width 326px
        height 38px
        padding 0 11px
        border 0
        outline 0
        border 1px solid #dbdbdb
    
    .search-bar button 
        width 40px
        height 38px
        background-color #3e98a1
        border none
        display flex
        align-items center
        justify-content center
    
    .search-bar buttonhover 
        background-color #ed4259
    
    .header-right 
        display none
    
    .account-btn 
        display flex
        align-items center
        height 40px
        width 120px
        justify-content center
        border 1px solid #e6e6e6
        background-color transparent
        &:hover
            cursor pointer
            background-color #ed4259
        &:hover p
            color #fff

    
    .account-btn p 
        margin-left 5px
        font-size 14px
        font-style italic
    
</style>