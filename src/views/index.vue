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
  export default{
    data(){
      return {
        cards: [{
          headName: '模块1',
          postDatas: {
            id: '123',
            username: 'panda000'
          },
          resDatas: {
            id: '123',
            username: 'panda000'
          }
        }, {
          headName: '模块2',
          postDatas: {
            id: '123',
            username: 'panda000'
          },
          resDatas: {
            id: '123',
            username: 'panda000'
          }
        }, {
          headName: '模块3',
          postDatas: {
            id: '123',
            username: 'panda000'
          },
          resDatas: {
            id: '123',
            username: 'panda000'
          }
        }],
      }
    },
    created(){
      console.log('create')
    },
    components: {},
    computed: {},
    methods: {
      send (index) {
        let _this = this;
        let obj = {
          id: Date.parse(new Date()),
          username: Date.parse(new Date()) + 'jxg'
        }
        this.cards[index].resDatas = obj;
        window.jsBridge(function () {

        })
        //调用native方法
//        bridge.callHandler('testObjcCallback', {'foo': 'bar'}, function (response) {
//        console.log(response)
//        _this.resDatas.push(response)
//        })
      }
    }
  }
</script>

