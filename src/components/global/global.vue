<template>
  <div>
    <fesDialog v-model="isShow" :close-on-click-overlay="false">
      <div class="common">
        <img :src="icon"/>
        <p class="hint" v-html="openTime"></p>
        <div class="know-btn" @click="close">{{msg}}</div>
        <div class="close-btn" @click="close"></div>
      </div>
    </fesDialog>
  </div>
</template>

<script>
import fesDialog from '../dialog'
export default {
  name: 'global',
  components: {
    fesDialog
  },
  props: {
    time: Number,
    msg: String,
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      icon: require('./img/bg.png')
    }
  },
  computed: {
    openTime: function() {
      let time = parseInt(this.time)
      const curTimeObj = new Date()
      const curTime = curTimeObj.getTime()
      const ruler = 3600000
      const deta = (time - curTime) / ruler
      const timeObj = new Date(time)

      let halfDay = timeObj.getHours() < 12 ? '上午' : '下午'
      let hour = timeObj.getHours() < 12 ? timeObj.getHours() : timeObj.getHours() - 12
      let showHour = hour > 9 ? '' + hour : '0' + hour
      let showMinutes = timeObj.getMinutes() > 9 ? timeObj.getMinutes() : '0' + timeObj.getMinutes()
      let day = ''
      let result = ''

      if (deta < 24 && deta > 0) {
        day = '今天'
      } else if (deta >= 24 && deta < 48) {
        day = '明天'
      } else if (deta >= 48 && curTimeObj.getFullYear() === timeObj.getFullYear()) {
        day = timeObj.getMonth() + 1
        day = day + '月' + timeObj.getDate() + '日'
      } else if (deta >= 48 && curTimeObj.getFullYear() !== timeObj.getFullYear()) {
        day = timeObj.getMonth() + 1
        day = timeObj.getFullYear() + '年' + day + '月' + timeObj.getDate() + '日'
      }

      result = day + halfDay + showHour + ':' + showMinutes

      if (deta < 0) {
        return '维护中，即将开放，敬请期待！'
      } else {
        return '维护中,<br>预计' + result + '开放'
      }
    }
  },
  methods: {
    close(callback) {
      typeof callback === 'function' && callback()
      this.$emit('close') // 实现单例需要发消息发出去
      this.$destroy()
      let el = this.$el
      el.parentNode && el.parentNode.removeChild(el)
    }
  },
  beforeDestroy() {
    // 调用了$destroy后会触发的
    // 如果有组件级别的全局的监听器，这里需要取消掉
    console.log('I destory')
  }
}
</script>

<style lang="postcss" scoped>
.common{
  width: 326px;
  height: 268px;
  border-radius: 3px;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    display: block;
    margin-top: 36px;
    width: 111px;
    height: 111px;
  }
  .hint {
    text-align: center;
    margin-top: 10px;
    height: 42px;
    color: rgb(156,156,156);
    font-size: 15px;
  }
  .know-btn {
    margin-top: 15px;
    color: rgb(255,103,2);
    font-size: 17px;
    height: 34px;
    line-height: 34px;
  }
  .close-btn {
    position: absolute;
    bottom: -77px;
    left: 50%;
    margin-left: -20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('./img/close-btn.png') no-repeat center center;
    background-size: contain;
  }
}
</style>
