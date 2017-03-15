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

  /*button{*/
    /*font-family: inherit;*/
    /*border:1px solid #5cadff;*/
    /*outline: none;*/
    /*background: white;*/
    /*text-decoration: none;*/
    /*touch-action: manipulation;*/
  /*}*/

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

  .cards {
    box-shadow: 0 2px 7px rgba(0,0,0,.15);
    border-color: transparent;
    padding:10px;
    margin-bottom:10px;
    border-radius:4px;
    .button {
      border:1px solid #d7dde4;
      font-size: 15px;
      color:#657180;
      text-align: center;
      width: 3.5rem;
      float: right;
      padding: 3px;
      display: inline-block;
      border-radius: 4px;
      transition:color .15s linear,border .15s linear,transform 0.15s linear;
      /*

      */
      -webkit-tap-highlight-color: rgba(255,255,255,255);
      &:active{
         transform: scale(1.1,1.1);
         outline: 0;
         transition: none;
         color: #4084FF;
         background-color: #fff;
         border-color: #4084FF;
       }

    }
  }
  .item {
    border-bottom1: solid 1px gray;
  }

</style>

<script>

  import {Bridge} from '../common/WebView'
  import {DATA} from '../data'

  export default{
    data(){
      return {
        cards:DATA.cards
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

