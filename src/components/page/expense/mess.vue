<template>
  <div class="mess">
    <p class="top">
      当前位置：门店 >
      <router-link to="/home/f_manage">费用结算</router-link>>
      <router-link to="/home/valildate">验车</router-link>>
      <router-link to="/home/mess">结算</router-link>
    </p>
    <div class="two">
      <div class="two_2">
        <p class="p1">
          账号
          <span>18739294474</span>
        </p>
        <p class="p2">订单信息</p>
        <div class="pp">
          <p class="p3">
            车牌号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>豫A·88888</span>
          </p>
          <p class="p4">
            取车时间&nbsp;&nbsp;&nbsp;&nbsp;
            <span>2018-10-8</span>
          </p>
          <p class="p5">
            还车时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>2018-10-26</span>
          </p>
        </div>
      </div>
      <div class="two_1">
        <div>
          <h1>车辆信息</h1>
          <img src="./../reserve/img/img_2.jpg@2x.png" alt="车" />
        </div>
        <div>
          <p>宝马三系</p>
          <p>
            <span>3厢</span>
            <span>2.0自动</span>
            <span>5人座</span>
          </p>
          <p>店内库存：3辆</p>
          <p>日租价：599元</p>
        </div>
      </div>
    </div>
    <div class="fist">
      <div class="fist_">
        <h1>消费信息</h1>
        <div class="bibbi">
          <p>
            里程数
            <span class="span1">2145</span>&nbsp;&nbsp;&nbsp;km
          </p>
          <p>
            基本保险
            <span class="span2">无</span>&nbsp;&nbsp;&nbsp;元
          </p>
          <p>
            油费
            <span class="span3">3</span>&nbsp;&nbsp;&nbsp;格
          </p>
          <p>
            总费用
            <span class="span4">2200</span>&nbsp;&nbsp;&nbsp;元
          </p>
          
        </div>
        <div class="didi">
          <p>
            使用费
            <span class="span1">2145</span>&nbsp;&nbsp;&nbsp;元
          </p>
          <p>
            手续费用
            <span class="span2">无</span>&nbsp;&nbsp;&nbsp;元
          </p>
          <p>
            车辆损失
            <span class="span3 aaa">3</span>&nbsp;&nbsp;&nbsp;元
          </p>
          <p>
            应还金额
            <span class="span4 aaa">2200</span>&nbsp;&nbsp;&nbsp;元
          </p>
        </div>
       
      </div>
       <div class="ipyut">
          <p>
            <input type="radio" name="a"/>使用平驾币(剩余2000币)
          </p>
          <p>
            <input type="radio" name="a"/>使用积分(剩余3000积分)
          </p>
          <button @click="finish">完成</button>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods:{
    finish(){
      alert('结算已完成');
    },
  }
};
</script>

<style lang="less" scoped>
.mess {
  width: 100%;
  height: 100%;
  background: rgb(240, 249, 255);
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  .top {
    font-size: 12px;
    position: absolute;
    top: 0px;
    left: 20px;
    color: black;
    a {
      text-decoration: none;
      color: black;
    }
  }
  .two {
    margin-bottom: 20px;
    overflow: hidden;
    div {
      float: left;
      background: white;
    }
    h1 {
      font-size: 18px;
      font-weight: normal;
    }
    .two_2 {
      width:44%;
      height: 285px;
      background-color: white;
      // position: relative;
      .p1 {
        font-size: 16px;
        margin-left: 20px;
        padding-top: 20px;
        span {
          margin-left: 50px;
        }
      }
      .p2 {
        font-size: 18px;
        margin-top: 30px;
        margin-left: 20px;
      }
      .pp {
        margin-top: 40px;
        margin-left: 80px;
        .p3 {
          width: 326px;
          text-align: right;
          height: 30px;
          line-height: 30px;
          margin-bottom: 15px;
          font-size: 14px;
          span {
            padding: 3px 40px;
            margin: 0 15px;
          }
        }
        .p4 {
          width: 326px;
          text-align: right;
          height: 30px;
          line-height: 30px;
          margin-bottom: 15px;
          font-size: 14px;
          span {
            padding: 3px 40px;
            margin: 0 15px;
          }
        }
        .p5 {
          width: 326px;
          text-align: right;
          height: 30px;
          line-height: 30px;
          margin-bottom: 15px;
          font-size: 14px;
          span {
            padding: 3px 33px;
            margin: 0 15px;
          }
        }
      }
    }
    .two_1 {
      padding: 25px;
      margin-right: 45px;
      margin-left: 20px;
      width:44%;
      div:nth-of-type(1) {
        img {
          margin: 66px 56px 30px 0;
        }
      }
      div:nth-of-type(2) {
        margin-top: 40px;
        p {
          margin-bottom: 25px;
        }
        p:nth-of-type(1) {
          font-size: 24px;
        }
        p:nth-of-type(2) {
          font-size: 14px;
          span {
            padding: 2px 5px;
            border: 1px solid rgb(255, 212, 9);
            border-radius: 5px;
            margin-right: 12px;
            color: #cccccc;
          }
        }
      }
    }
  }
}
.fist {
  overflow: hidden;
  width: 975px;
  height: 338px;
  background-color: white;
  .fist_ {
    overflow: hidden;
    float: left;
    h1 {
      font-size: 18px;
      font-weight: normal;
    }
    .bibbi {
      float: left;
      p {
        margin-left: 100px;
        margin-top: 13px;
        span {
          display: inline-block;
          width: 60px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-align: center;
        }
        .span1 {
          // width: 80px;
          margin-left: 16px;
        }
        .span2 {
          // width: 160px;
        }
        .span3 {
          // width: 60px;
          margin-left: 32px;
        }
        .span4 {
          // width: 60px;
          margin-left: 15px;
        }
      }
    }
    .didi {
      float: right;
      p {
        margin-left: 100px;
        margin-top: 13px;
        span {
          display: inline-block;
          width: 60px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-align: center;
        }
        .span1 {
          // width: 80px;
          margin-left: 16px;
        }
        .span2 {
          // width: 160px;
        }
        .span3 {
          // width: 60px;
          margin-left: 32px;
        }
        .span4 {
          // width: 60px;
          margin-left: 15px;
        }
        .aaa{
          margin-left: 0px;
        }
        
      }
    }
  }
}
.ipyut {
  overflow: hidden;
  margin-top: 20px;
  margin-left: 100px;
  width: 100%;
  p {
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  button {
    width: 90px;
    height: 32px;
    background-color: #ffd409;
    border: 1px solid white;
    margin-left: 200px;
    margin-top: 13px;
    cursor: pointer;
  }
}
</style>