<template>
  <div class="preload-image">
    <img :src="image.imageUrl" v-for="(image, index) in PRE_IMAGESET" :key='index'>
  </div>
</template>

<script>
import imageSets from './imagePath.js'

export default {
  name: 'preLoad',
  data() {
    return {
      PRE_IMAGESET: imageSets,
      count: 0
    }
  },
  mounted() {
    let imgs = document.querySelectorAll('img')
    Array.from(imgs).forEach((item) => {
      let img = new Image()
      img.onload = () => {
        this.count++
      }
      img.src = item.getAttribute('src')
    })
    if (this.PRE_IMAGESET.length === 0) {
      this.$emit('imgLoaded')
    }
  },
  watch: {
    count(val, oldVal) {
      if (val === this.PRE_IMAGESET.length) {
        this.$emit('imgLoaded') // 触发图片加载完成事件，loading层去除
      }
    }
  }
}
</script>

<style lang="postcss">
  .preload-image {
    width: 0;
    height: 0;
    img {
      display: none;
    }
  }
</style>
