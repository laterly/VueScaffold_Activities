export default {
  /* 找到最近的触发滚动事件的元素
   * @param {Element} element
    * @param {Element} rootElement
    * @return {Element | window}
   */
  getScrollEventTarget(element, rootParent = window) {
    let currentNode = element
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
      const overflowY = this.getComputedStyle(currentNode).overflowY
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode
      }
      currentNode = currentNode.parentNode
    }
    return rootParent
  },

  // 判断元素是否被加入到页面节点内
  isAttached(element) {
    let currentNode = element.parentNode
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true
      }
      if (currentNode.nodeType === 11) {
        return false
      }
      currentNode = currentNode.parentNode
    }
    return false
  },
  getComputedStyle: document.defaultView.getComputedStyle.bind(document.defaultView) 
}