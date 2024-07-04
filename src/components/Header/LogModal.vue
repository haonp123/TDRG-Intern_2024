<template lang="pug">
.log-container.flex-center(@click.self="props.handleClick")
  .log-modal
    .close-btn(@click="props.handleClick")
      CloseIcon(width="30px" height="30px" fill="#48484a")
    .inner-container
      .log-select
        h1.title(:class="currentLog === 'login' ? 'title-active' : ''" @click="() => currentLog ='login'") Đăng nhập
        h1.title(:class="currentLog === 'sign-up' ? 'title-active' : ''" @click="() => currentLog ='sign-up'") Đăng ký
      
      form
        .input-container
          input(type="text" placeholder="Email")
          EmailIcon(width="20px" height="20px" fill="#ccc")
        .input-container
          input(:type="showPassword ? 'text' : 'password'" placeholder="Mật khẩu")
          EyeIcon(@click="toggleShowPassword" v-if="!showPassword" width="20px" height="20px" fill="#ccc")
          SlashEyeIcon(@click="toggleShowPassword" v-else width="20px" height="20px" fill="#ccc")
        .input-container(v-if="currentLog == 'sign-up'")
          input(:type="showPassword ? 'text' : 'password'" placeholder="Mật khẩu")
          EyeIcon(@click="toggleShowPassword" v-if="!showPassword" width="20px" height="20px" fill="#ccc")
          SlashEyeIcon(@click="toggleShowPassword" v-else width="20px" height="20px" fill="#ccc")
        button.submit-btn Đăng nhập
      div(v-if="currentLog === 'login'")
        a.forget(href="") Quên mật khẩu
        p.more-text hoặc đăng nhập qua
        .more-options.flex-center
          a.flex-center(href="" style="background-color: #C5331E;")
            GoogleIcon(width="24px" height="24px" fill="#fff")
          a.flex-center(href="" style="background-color: #4E6297")
            FacebookIcon(width="24px" height="24px" fill="#fff")
</template>

<script setup>
import { ref } from "vue"

import CloseIcon from "../../assets/svg/xmark-solid.svg"
import EmailIcon from "../../assets/svg/envelope-regular.svg"
import EyeIcon from "../../assets/svg/eye-regular.svg"
import SlashEyeIcon from "../../assets/svg/eye-slash-regular.svg"
import GoogleIcon from "../../assets/svg/google.svg"
import FacebookIcon from "../../assets/svg/facebook-f.svg"

const props = defineProps({
  handleClick: Function
})

const showPassword = ref(false)
const currentLog = ref('login')


</script>

<style lang="stylus" scoped>
.flex-center
  display flex
  align-items center
  justify-content center
.log-container
  position fixed
  z-index 10
  top 0
  bottom 0
  left 0
  right 0
  background-color rgba(0, 0, 0, 0.5)
  .log-modal
    width 650px
    height 500px
    background-color #fff
    border-radius 10px
    position relative
    display flex
    justify-content center
    .close-btn
      position absolute
      right 10px
      top 10px
      cursor pointer
    .inner-container
      margin-top 45px
      width 375px
      .log-select
        display flex
        h1.title
          font-size 24px
          font-weight medium
          color #ccc
          cursor pointer
          &.title-active
            color #48484A
            border-bottom 3px solid #bf2c24
          & + h1.title
            margin-left 15px
        

      form
        margin-top 20px
        .input-container
          width 100%
          display flex
          justify-content space-between
          padding 10px
          border 1px solid #D3D3D8
          border-radius 5px
          & + .input-container
            margin-top 10px
          input
            border none
            outline none
            color #C0C4CC
            flex 1
            margin-right 16px
        button.submit-btn
          width 100%
          color #fff
          font-size 14px
          font-weight medium
          border none
          outline none
          padding 10px
          border-radius 5px
          background-color #BF2C24
          margin-top 40px
      a.forget
        display block
        text-decoration none
        text-align right
        color #409EFF
        font-size 14px
        margin 10px 0
      .more-text
        color #8E8E93
        text-align center
      .more-options
        margin-top 20px
        a
          width 50px
          height 50px
          border-radius 50%
          margin 0 15px
      .more-content
        margin-top 15px
        text-align center
        color #8E8E93
        a
          color #BF2C24
          text-decoration none
          margin-left 3px
          font-weight medium


</style>
