<template>
  <div class="loadingWrapper">
      <h2>载入中, 请稍候...</h2>
      <vue-loading type="bars" color="#20A0FF" :size="{ width: '50px', height: '50px' }"></vue-loading>    
  </div>
</template>
<script>
export default {
  name: 'loadingMask'
}
</script>

<style lang="postcss">
  .loadingWrapper {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    h2 {
      text-align: center;
      width: 100%;
      margin-top: 200px;
      margin-bottom: 20px;
      font-size: 18px;
      color: #333;
    }
  }
</style>
