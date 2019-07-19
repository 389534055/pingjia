<template>
  <div class="query">
    <p class="top">当前位置：门店 > 会员管理 > 会员查询</p>
    <div class="one">
      <div>
        <h1>会员基本信息</h1>
        <p>
          手机号
          <span>*</span>
          <input type="text" placeholder="请输入手机号进行查询" />
        </p>
      </div>
      <div>
        <button>查询</button>
      </div>
    </div>

    <div class="two">
      <h1>账号信息</h1>
      <div>
        <p>
          平驾币
          <span>4000</span>
        </p>
        <p>
          积分
          <span>3000</span>
        </p>
        <p>
          <button @click="CHH">充值</button>
        </p>
      </div>
    </div>

    <div class="three">
      <h1>消费记录</h1>
      <table>
        <tr>
          <td>时间</td>
          <td>车型</td>
          <td>租赁方式</td>
          <td>处理状态</td>
          <td>操作</td>
        </tr>
        <tr>
          <td>2019-7-9</td>
          <td>SUV</td>
          <td>时租</td>
          <td>已完成</td>
          <td class="td2">
            <span></span>
            <span></span>
          </td>
        </tr>
      </table>
    </div>

    <div class="four">
      <h1>充值记录</h1>
      <table>
        <tr>
          <td>时间</td>
          <td>支付金额</td>
          <td>平驾币</td>
          <td>积分</td>
        </tr>
        <tr>
          <td>2019-7-9</td>
          <td>500</td>
          <td>100</td>
          <td>1000</td>
        </tr>
      </table>
    </div>
    <div class="chongzhi" v-show="CH">
      <div>
        <span @click="CHH_" class="cha"></span>
        <p>
          <span>充值：</span>
          <input type="text" />
        </p>
        <p>
          <span>当前余额：</span>
          <span class="now_">1000</span>
        </p>
        <p>
          <button @click="CHH_">确认</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      CH: false
    };
  },
  methods: {
    CHH() {
      this.CH = true;
    },
    CHH_() {
      this.CH = false;
    }
  }
};
</script>

<style lang="less" scoped>
.query {
  overflow: scroll;
  width: 100%;
  height: 100%;
  background: rgb(240, 249, 255);
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  .chongzhi {
    div {
      p {
        span {
          display: inline-block;
          width: 80px;
          text-align: right;
        }
        .now_ {
          width: 160px;
          height: 32px;
          line-height: 32px;
          border-radius: 4px;
          border: 1px solid #cccccc;
          outline: none;
          text-align: center;
        }
      }
    }
  }
  .bianji,
  .chongzhi {
    position: absolute;
    left: 0;
    top: 0;
    width: 1066px;
    height: 555px;
    background: rgba(0, 0, 0, 0.3);
    div {
      background: white;
      width: 504px;
      height: 403px;
      margin: auto;
      margin-top: 60px;
      box-sizing: border-box;
      padding: 100px 120px;
      position: relative;
      .cha {
        position: absolute;
        top: 0;
        right: 0;
        width: 37px;
        height: 37px;
        background: url("./../../img/删除筛选项@2x.png") no-repeat center center;
        background-size: 37px 37px;
        cursor: pointer;
      }
      p {
        margin-bottom: 20px;
        input {
          width: 160px;
          height: 32px;
          border-radius: 4px;
          outline: none;
        }
        button {
          width: 100px;
          height: 32px;
          border: none;
          background: rgb(255, 212, 9);
          margin-top: 20px;
          border-radius: 5px;
        }
      }
      p:nth-of-type(3) {
        text-indent: 77px;
      }
    }
  }
  .top {
    font-size: 12px;
    position: absolute;
    top: 0px;
    left: 20px;
    color: black;
  }
  .one,
  .two,
  .three,
  .four {
    padding: 17px 25px;
    background: white;
    margin-bottom: 20px;
    h1 {
      font-size: 18px;
      font-weight: normal;
    }
    table {
      margin-left: 90px;
      td {
        height: 40px;
        line-height: 40px;
        display: inline-block;
        width: 150px;
        text-align: center;
      }
      tr:nth-of-type(1) {
        background: #feed9d;
      }
      tr:nth-of-type(2) {
        background: #eeeeee;
      }
      .td2 {
        span {
          display: inline-block;
          width: 24px;
          height: 30px;
          cursor: pointer;
        }
        span:nth-of-type(1) {
          background: url("./img/bian.png") no-repeat center center;
          background-size: 24px 30px;
        }
        span:nth-of-type(2) {
          background: url("./img/del.png") no-repeat center center;
          background-size: 24px 30px;
        }
      }
    }
  }
  .one {
    overflow: hidden;
    div {
      float: left;
      p {
        span {
          color: red;
        }
        margin-bottom: 14px;
      }
    }
    div:nth-of-type(1) {
      p:nth-of-type(1) {
        margin-top: 19px;
      }
      input {
        width: 160px;
        height: 30px;
        border-radius: 5px;
        margin-right: 20px;
        outline: none;
      }
    }
    div:nth-of-type(2) {
      margin: 42px 0 0 476px;
      button {
        cursor: pointer;
        width: 90px;
        height: 33px;
        background: rgb(255, 212, 9);
        border: none;
        border-radius: 5px;
      }
    }
  }
  .two {
    div {
      overflow: hidden;
      margin-top: 20px;
      p {
        float: left;
        span {
          display: inline-block;
          width: 90px;
          height: 30px;
          border: 1px solid #cccccc;
          border-radius: 5px;
          text-align: center;
          line-height: 30px;
          margin-left: 14px;
        }
        button {
          cursor: pointer;
          width: 90px;
          height: 33px;
          background: rgb(255, 212, 9);
          border: none;
          border-radius: 5px;
        }
      }
      p:nth-of-type(1) {
        margin-right: 200px;
      }
      p:nth-of-type(3) {
        margin-left: 223px;
      }
    }
  }
  .four {
    margin-bottom: 0;
  }
}
</style>