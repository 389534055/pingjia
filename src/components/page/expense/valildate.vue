<template>
  <div class="valildate">
    <p class="top">
      当前位置：门店 >
      <router-link to="/home/f_manage">费用结算</router-link>> 验车
    </p>
    <div class="two">
      <div class="two_2">
        <h2>
          账号
          <span>16678930521</span>
        </h2>
        <h1>订单信息</h1>
        <p>
          车牌号
          <span>豫A-8B167</span>
        </p>
        <p>
          取车时间
          <span>2019-7-10</span>
        </p>
        <p>
          取车时间
          <span>2019-7-10</span>
        </p>
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
    <div class="one">
      <h3>消费信息</h3>
      <p>
        里程数
        <span>2145</span>km
      </p>
      <p>
        损失说明
        <span>无</span>
      </p>
      <p>
        油量
        <span>3</span>格
      </p>
      <p>
        合计
        <span>2200</span>元
      </p>
      <p>
        <button>
          <router-link to="/home/mess">结算</router-link>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.valildate {
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
  .one {
    background: white;
    padding: 20px;
    h3 {
      font-size: 18px;
      font-weight: normal;
    }
    p {
      width: 326px;
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
      font-size: 14px;
      span {
        padding: 3px 40px;
        margin: 0 15px;
        border: 1px solid #acaaaa;
        border-radius: 5px;
      }
    }
    p:nth-of-type(1){
      margin-left:124px;
    }
    p:nth-of-type(2){
      margin-left:109px;
    }
    p:nth-of-type(3){
      margin-left:136px;
    }
    p:nth-of-type(4){
      margin-left:136px;
    }
    p:last-child {
      margin-bottom: 0;
       margin-left:182px;
      button {
        margin-right: 77px;
        width: 90px;
        height: 30px;
        border-radius: 5px;
        border: none;
        background: rgb(255, 212, 9);
        a{
          text-decoration: none;
          color:black;
          display: block;
        }
      }
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
    .two_1 {
      width:44%;
      padding: 25px;
      div:nth-of-type(1) {
        img {
          margin: 26px 56px 30px 0;
        }
      }
      div:nth-of-type(2) {
        margin-top: 20px;
        p {
          margin-bottom: 20px;
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
    .two_2 {
      padding: 25px;
      margin-right: 70px;
      width:39%;
      h2 {
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 15px;
        span {
          margin-left: 50px;
        }
      }
      h1 {
        margin-bottom: 13px;
      }
      p {
        text-align: center;
        height: 30px;
        line-height: 30px;
        margin: 0 0 15px 170px;
        font-size: 14px;
        span {
          padding: 3px 40px;
          margin: 0 15px;
        }
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>