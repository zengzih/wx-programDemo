// pages/components/components.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      imgUrls: {
        type: Array,
        value: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ]
      },
      indicatorDots: {
        type: Boolean,
        value: false
      },
      autoplay: {
        type: Boolean,
        value: false
      },
      interval: {
        type: Number,
        value: 5000,
        observer: 'handleChange'
      },
      duration: {
        type: Number,
        value: 1000
      },
      options: Array
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
      handlerComponentTap(e) {
          console.log(e);
          let { list } = e.currentTarget.dataset;
          let component = { name: 'swiper' };
          list = Object.assign(list, component);
          console.log(list);
          this.triggerEvent('listevent', list, component);
      },
      handleChange() {
          console.log('-----handleChange---', arguments);
      }

  }
})
