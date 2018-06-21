<template>
  <div class="loadingWrapper">
      <h2>载入中, 请稍候...</h2>
      <vue-loading type="bars" color="#20A0FF" :size="{ width: '50px', height: '50px' }"></vue-loading>    
  </div>
</template>
<script>
import { VueLoading } from 'vue-loading-template'
export default {
  name: 'loadingMask',
  components: {
    VueLoading
  }
}
</script>

<style lang="postcss">
  .loadingWrapper {
    height: 100%;
    width: 100%;
    h2 {
      text-align: center;
      width: 100%;
      padding-top: 200px;
      padding-bottom: 20px;
      font-size: 18px;
      color: #333;
      margin: 0;
    }
  }
</style>
