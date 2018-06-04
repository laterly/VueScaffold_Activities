# festival_scaffold

> 针对用Vue写活动页面的脚手架，采用最新的webpack4 + vue-loader15, 后面会尝试引入一些动画库，目前引入了高可定制的弹窗组件和自动打包插件

DLL分离打包插件已添加，用于提升开发过程中的打包速度：

- 使用[API](https://github.com/asfktz/autodll-webpack-plugin) `package.json`中的`useAutoDll`选择是否启用这个特性
- 本质是利用DLL打包来实现，自动把`package.json`中的`dependencies`打包成`vendor`并自动引入
- 经过测试，未使用此特性前在开发环境`app.js`打包大小为`535kb`, 启用后为`491KB`, 如果引入资源多的话，优化会更明显，打包时间缩短

## 基本用法

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

- add precss to write BEM instead of sass
- add device-width calc(375) for moblie use
- add fesdialog for festival use
- add autodll-webpack-plugin support for dependencies cache

## fesdialog components readme:

### 基础用法
`popup`默认从中间弹出

```html
<van-popup v-model="show">内容</van-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  }
};
```

### 弹出位置
通过`position`属性设置 Popup 弹出位置

```html
<van-popup v-model="show" position="top" :overlay="false">
  内容
</van-popup>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前组件是否显示 | `Boolean` | `false` |
| overlay | 是否显示背景蒙层 | `Boolean` | `true` |
| lock-scroll | 是否锁定背景滚动 | `Boolean` | `true` |
| position | 可选值为 `top` `bottom` `right` `left` | `String` | - |
| overlay-class | 自定义蒙层 class | `String` | `` |
| overlay-style | 自定义蒙层样式 | `Object` | `` |
| close-on-click-overlay | 点击蒙层是否关闭 Popup | `Boolean` | `true` |
| transition | transition 名称 | `String` | `popup-slide` |
| get-container | 指定弹出层挂载的 HTML 节点 | `() => HTMLElement` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click-overlay | 点击蒙层时触发 | - |
