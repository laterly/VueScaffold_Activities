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
- add vue-loading for image cache show

## fesdialog components readme:

### 基础用法
`popup`默认从中间弹出

```html
<fesDialog v-model="show">内容</fesDialog>
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
<fesDialog v-model="show" position="top" :overlay="false">
  内容
</fesDialog>
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

## vue-loading文档说明：

详见：https://github.com/jkchao/vue-loading

实际的活动页面开发中，图片资源是很重要的一个方面，一般开发过程中先不考虑图片的压缩和加载，在项目通过主要流程测试后，为了优化往往会压缩图片资源，并针对图片进行预加载，加载过程中显示`loading`图，然后资源加载完毕后展现活动页面。为了方便图片路径自动生成，我们约定图片资源都放在`src/assets/`下，利用代码在`src/components/optimize`下生成路径聚合文件`imagePath.js`并在`preImage.vue`组件中引入。

用法：
- 自动生成相对的图片路径：`npm run image`
- 在页面中引入`preImage`组件，并监听其`imgLoaded`方法，对`vue-loading`做展现控制操作
- 具体可参照`App.vue`中的逻辑写法
- 如果对`loading`展现需要定制，可修改`loadingMask.vue`文件进行订制开发

补充：考虑到如果需要加载的图片过多，导致实际的`loading`时间过长，对用户体验有伤害，特加入以下特性：

- 如果图片不到`10000`字节，由于框架会自动base64转码，不考虑图片提前缓存
- 如果有图片不想放到缓存队列中，可以在图片名字中加入`_nocache`字符串，避免提前缓存阻塞活动页面展现


欢迎`star`&&`fork`, 如果在使用过程中有问题或者需要进一步探讨，欢迎加我微信`kashao3824`(备注`github`)或者开`issue`。