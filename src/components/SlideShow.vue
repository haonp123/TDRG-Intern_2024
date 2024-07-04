<template lang="pug">
.slide-show
    div(@click="handle" class="slide-list" ref="slideElement")
        img(v-for="slide in slideList" :key="slide.src" :src="slide.src" alt="")
    .dot-list
        div(:class="slide.id === currentIndex ? ['dot-item', 'dot-active'] : ['dot-item']" v-for="slide in slideList" :key="slide.id")

    
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slideList = [
    {
        id: 0,
        link: 'https://m.truyen.tangthuvien.vn/doc-truyen/pham-nhan-tu-tien-chi-tien-gioi-thien',
        src: '/images/slide1.jpg'
    },
    {
        id: 1,
        link: 'https://m.truyen.tangthuvien.vn/doc-truyen/pham-nhan-tu-tien-chi-tien-gioi-thien',
        src: '/images/slide2.jpg'
    },
    {
        id: 2,
        link: 'https://m.truyen.tangthuvien.vn/doc-truyen/pham-nhan-tu-tien-chi-tien-gioi-thien',
        src: '/images/slide3.jpg'
    },
    {
        id: 3,
        link: 'https://m.truyen.tangthuvien.vn/doc-truyen/pham-nhan-tu-tien-chi-tien-gioi-thien',
        src: '/images/slide4.jpg'
    },
    {
        id: 4,
        link: 'https://m.truyen.tangthuvien.vn/doc-truyen/pham-nhan-tu-tien-chi-tien-gioi-thien',
        src: '/images/slide5.jpg'
    },

]

const slideElement = ref();
const currentIndex = ref(0);
const slideInterval = ref()


onMounted(() => {
    slideInterval.value = setInterval(() => {
        if(currentIndex.value == slideList.length - 1) {
            currentIndex.value = 0
        }
        else {
            currentIndex.value++;
        }

        slideElement.value.scroll({
            left: currentIndex.value*(slideElement.value.offsetWidth + 15),
            behavior: 'smooth'
        })
    }, 5000)
})

onUnmounted(() => {
    clearInterval(slideInterval.value)
})

</script>

<style lang="stylus" scoped>
.slide-show 
    position relative
    padding 0 12px

.slide-list 
    display flex
    width 100%
    overflow hidden

img 
    width 100%
    object-fit cover
    margin-right 15px

.dot-list 
    position absolute
    display flex
    justify-content center
    left 0
    right 0
    bottom 0


.dot-item 
    width 5px
    height 5px
    background-color #fff
    border-radius 50%
    margin 5px 3px

.dot-active 
    background-color #ed424b

</style>