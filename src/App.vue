<template>
  <div id="app">
    <preImage @imgLoaded="hideLoading"></preImage>
    <loadingMask v-if="showLoading"></loadingMask>
    <router-view v-else/>
  </div>
</template>

<script>
import preImage from './components/optimize/preImage'
import loadingMask from './components/optimize/loadingMask'
export default {
  name: 'App',
  components: {
    preImage,
    loadingMask
  },
  data() {
    return {
      showLoading: true
    }
  },
  methods: {
    hideLoading: function() {
      this.showLoading = false
    }
  }
}
</script>

<style>

</style>
