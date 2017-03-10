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
          headName: '模块1',
          postDatas: {
            id: '123',
            number: 'panda000'
          },
          resDatas: {
            id: '123',
            number: 'panda000'
          }
        }, {
          headName: '模块2',
          postDatas: {
            id: '123',
            number: 'panda000'
          },
          resDatas: {
            id: '123',
            number: 'panda000'
          }
        }, {
          headName: '模块3',
          postDatas: {
            id: '123',
            number: 'panda000'
          },
          resDatas: {
            id: '123',
            number: 'panda000'
          }
        }],
      }
    },
    created(){
      if (window.bridge) {
        Bridge(function (bridge) {
          bridge.registerHandler('testJavascriptHandler', function (data, responseCallback) {
            //native调用js方法并返回一个responseData给native
            var responseData = {'Javascript Says': 'Right back atcha!'}
            responseCallback(responseData)
          })
        })
        let length = this.cards.length;
        for (let i = 0; i < length; i++) {
          bridge.callHandler('testObjcCallback', this.cards[i].postDatas, function (responseData) {
            _this.cards[i].resDatas = responseData
          })
        }
      }

    },
    components: {},
    computed: {},
    methods: {
      send (index) {
        let _this = this;
        let obj = {
          id: Date.parse(new Date()),
          number: parseInt(Math.random() * 10000)
        };
        this.cards[index].resDatas = obj;

        // 调用native方法并获得native返回参数
        if (window.bridge) {
          bridge.callHandler('testObjcCallback', _this.cards[index].postDatas, function (responseData) {
            _this.cards[index].resDatas = responseData
          })
        }
      }
    }
  }

</script>

