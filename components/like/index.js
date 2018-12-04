// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike: Boolean,
    count: Number,
    readOnly: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike() {
      const {isLike, count, readOnly} = this.properties
      if (readOnly) return
      this.setData({
        count: isLike ? count - 1 : count + 1,
        isLike: !isLike,
      })
      this.triggerEvent('like', { behavior: isLike ? 'like':'cancel'}, {})
    }
  }
})
