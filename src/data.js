/**
 * Created by jiangxiaogang938 on 17/3/15.
 */
var mockData = {
  cards: [{
    headName: 'hybrid.js.route',
    postDatas: {
      'md': 'PBDemoModule',
      'fn': 'push',
      'pm': {'url': 'https://www.baidu.com'},
      'cb': 'hybrid.native.route.success'
    },
    resDatas: {}
  }, {
    headName: 'hybrid.js.route',
    postDatas: {
      'md': 'PBDemoModule',
      'fn': 'event',
      'pm': {'foo': 'bar'},
      'cb': 'hybrid.native.route.success'
    },
    resDatas: {}
  }]
};
export {
  mockData as DATA
}
