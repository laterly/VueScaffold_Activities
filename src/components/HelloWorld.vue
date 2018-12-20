<template>
  <div class="hello">
    <h1 @click="dialogFunc" class="fes--center">{{ title }}</h1>
    <h2 class="fes--center" @click="showGlobal">click to open global dialog</h2>
    <fesDialog v-model="isShow" :close-on-click-overlay="false">
      <div class="fes-dialog">
        <span>{{msg}}</span>
        <div class="fes-dialog__button" @click="dialogFunc">Close</div>
      </div>
    </fesDialog>
  </div>
</template>

<script>
import fesDialog from './dialog'

export default {
  name: 'HelloWorld',
  data () {
    return {
      isShow: false,
      title: 'Festival Name',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    fesDialog
  },
  methods: {
    dialogFunc() {
      this.isShow = !this.isShow
    },
    showGlobal() {
      this.$showGlobal(+new Date() + 200000, '知道了')
    }
  }
}
</script>

<style lang="postcss">
.fes {
  &-dialog{
    background-color: #ffffff;
    width: 300px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      color: #333;
      font-size: 18px;
      margin-bottom: 10px;
    }
    &__button{
      padding: 5px 10px;
      color: peru;
      margin-top: 10px;
      border: 1px solid peru;
      border-radius: 5px;
    }
  }
  &--center {
    text-align: center;
    padding: 20px;
  }
}
</style>
