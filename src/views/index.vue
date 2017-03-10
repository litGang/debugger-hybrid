<template>
  <div class="index-module">
    <div class="cards" v-for="(val,key) in cards">
      <div>
        <div class="dis-inline header">{{val.headName}}</div>
        <div class="button dis-inline" @click="send(key)">send</div>
      </div>
      <div class="card">
        <div id="postData" class="card-item">
          <div class="item">
            {{val.postDatas}}
          </div>
        </div>
        <div id="responseData" class="card-item">
          <div class="item">
            <span>{{val.resDatas}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .index-module {
    margin: 5px;
  }

  .dis-inline {
    display: inline-block;
  }

  .card {
    padding: 7px;
    border: dotted 1px gray;
    margin: 15px 0 15px 0;
    border-radius: 3px;
  }

  .card-item {
    padding: 10px;
    border-bottom: dotted 1px #444444;
  }

  .card-item:last-child {
    border: none;
  }

  .header {
    padding-top: 5px;
  }

  .button {
    float: right;
    padding: 3px;
    border: solid 1px gray;
    display: inline-block;
    border-radius: 4px;
  }

  .item {
    border-bottom1: solid 1px gray;
  }

</style>

<script>

  import {Bridge} from '../common/WebView'

  export default{
    data(){
      return {
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
        }],
      }
    },
    created(){
//      var _this = this
//      Bridge(function (bridge) {
//        bridge.registerHandler('testJavascriptHandler', function (data, responseCallback) {
//          //native调用js方法并返回一个responseData给native
//          var responseData = {'Javascript Says': 'Right back atcha!'}
//          responseCallback(responseData)
//        })
//      })

    },
    components: {},
    computed: {},
    methods: {
      send (index) {
        // 调用native方法并获得native返回参数
        var _this = this;
        Bridge(function (bridge) {
            bridge.callHandler('hybrid.js.route', _this.cards[index].postDatas, function (responseData) {
              _this.cards[index].resDatas = responseData
            })
        })
      }
    }
  }

</script>

