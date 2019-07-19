<template>
  <div class="accept">
    <p class="top">
      当前位置：门店 >
      <router-link to="/home/y_manage">预订</router-link>> 受理预订
    </p>
    <div class="one">
      <div>
        <h1>用户订单</h1>
        <img src="./../../img/组 9@2x(3).png" alt />
      </div>
      <div>
        <p>
          账号
          <span>12345678901</span>
        </p>
        <p>
          <button>查询</button>
        </p>
      </div>
      <div>
        <h3>消费历史</h3>
        <table>
          <tr>
            <td>下单日期</td>
            <td>车型</td>
            <td>时长</td>
          </tr>
          <tr>
            <td>2019-5-2</td>
            <td>宝马3系</td>
            <td>3天</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="two">
      <div class='two_1'>
        <div>
          <h1>车辆信息</h1>
          <img src="./img/img_2.jpg@2x.png" alt="车" />
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
      <div class='two_2'>
        <h1>订单信息</h1>
        <p>车牌号<span>豫A-8B167</span></p>
        <p>定金<span>200</span>元</p>
        <p>取车时间<span>2019-7-10</span></p>
        <p>取车时间<span>2019-7-10</span></p>
        <p><button>确认</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.accept {
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
    overflow: hidden;
    padding: 15px 25px;
    margin-bottom:20px;
    background: white;
    div {
      float: left;
    }
    div:nth-of-type(1) {
      h1 {
        font-weight: normal;
        font-size: 24px;
      }
      img {
        margin: 27px 100px 0 50px;
        width: 111px;
      }
    }
    div:nth-of-type(2) {
      margin-top: 45px;
      span {
        width: 160px;
        height: 30px;
        line-height:30px;
        border-radius: 5px;
        text-align: center;
        border:1px solid #cccccc;
        margin-left: 12px;
        display:inline-block;
      }
      button {
        width: 90px;
        height: 33px;
        background: rgb(255, 212, 9);
        border: none;
        border-radius: 5px;
        margin: 50px 0 0 60px;
        cursor: pointer;
      }
    }
    div:nth-of-type(3) {
      margin: 45px 0 0 60px;
      h3 {
        font-size: 16px;
        font-weight: normal;
      }
      table {
        margin-top: 15px;
        text-align: center;
        width: 400px;
        border-collapse: collapse;
        tr {
          height: 40px;
          line-height: 40px;
        }
        tr:nth-of-type(2n) {
          background: white;
        }
        tr:nth-of-type(2n + 1) {
          background: #cccccc;
        }
        tr:nth-of-type(1) {
          background: rgb(254, 237, 157);
        }
      }
    }
  }
  .two {
    overflow: hidden;
    div {
      float: left;
      background: white;
    }
    h1{
      font-size:18px;
      font-weight: normal;
    }
    .two_1 {
      padding:25px;
      margin-right:45px;
      width:46%;
      div:nth-of-type(1){
        img{
          margin:66px 70px 30px 0;
        }
      }
      div:nth-of-type(2){
        margin-top:40px;
        p{
          margin-bottom:25px;
        }
        p:nth-of-type(1){
          font-size:24px;
        }
        p:nth-of-type(2){
          font-size:14px;
          span{
            padding:2px 5px;
            border:1px solid rgb(255, 212, 9);
            border-radius: 5px;
            margin-right:12px;
            color:#cccccc;
          }
        }
      }
    }
    .two_2 {
      padding:25px;
      width:39%;
      p{
        width:326px;
        text-align:right;
        height:30px;
        line-height:30px;
        margin-bottom: 15px;
        font-size:14px;
        span{
          padding:3px 40px;
          margin:0 15px;
          border:1px solid #acaaaa;
          border-radius: 5px;
        }
      }
      p:nth-of-type(2){
        text-align:center;
        padding-left:42px;
      }
      p:nth-of-type(3),p:nth-of-type(4){
        span{
          background:url('./img/icon.png@2x.png') no-repeat right center;
        }
      }
      p:last-child{
         margin-bottom:0;
         button{
           margin-right:77px;
           width:90px;
           height:30px;
           border-radius: 5px;
           border:none;
           background:rgb(255, 212, 9);
         }
        
      }
    }
  }
}
</style>