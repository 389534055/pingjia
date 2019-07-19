<template>
  <div class="box">
    <p class="top">当前位置：门店 > 车辆管理</p>
    <div class="inquire">
      <h1>请输入要查询的信息</h1>
      <p>
        车牌号
        <input type="text" />
        <button>查询</button>
      </p>
    </div>
    <div class="message">
      <div class="message_y">
        <p>
          <span>车辆实景</span>
          <span>车牌号</span>
          <span>发动机号码</span>
          <span>荷载人数</span>
          <span>注册时间</span>
          <span>发证时间</span>
        </p>
      </div>
      <div class="message_x">
        <ul>
          <li>
            <img src="./../reserve/img/img_2.jpg@2x.png" />
            <span>豫A·88888</span>
            <span>F16D3 9831274981</span>
            <span>5人</span>
            <span>2018-10-26</span>
            <span>2018-10-8</span>
          </li>
          <li>
            <img src="./../reserve/img/img_2.jpg@2x.png" />
            <span>豫A·88888</span>
            <span>F16D3 9831274981</span>
            <span>5人</span>
            <span>2018-10-26</span>
            <span>2018-10-8</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #f0f9ff;
  -webkit-box-sizing: border-box;
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
  .inquire {
    padding: 25px;
    background: white;
    margin-bottom: 20px;
    h1 {
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 20px;
    }
    p {
      input {
        width: 160px;
        height: 32px;
        margin: 0 160px 0 20px;
        border-radius: 3px;
        outline: none;
        background: url("./../reserve/img/icon.png@2x.png") no-repeat 136px 8px;
      }
      button {
        border: none;
        border-radius: 5px;
        width: 92px;
        height: 32px;
        background: rgb(255, 212, 9);
        text-decoration: none;
        line-height: 32px;
        text-align: center;
        color: black;
      }
    }
  }
  .message {
    height: 310px;
    background: white;
    margin-bottom: 20px;
    .message_y {
      height: 50px;
      background-color: #feed9d;
      p {
        height: 50px;
        span:nth-child(1) {
          margin-left: 84px;
        }
        span:nth-child(2) {
          margin-left: 110px;
        }
        span:nth-child(3) {
          margin-left: 78px;
        }
        span:nth-child(4) {
          margin-left: 44px;
        }
        span:nth-child(5) {
          margin-left: 78px;
        }
        span:nth-child(6) {
          margin-left: 124px;
        }
        span {
          line-height: 50px;
          display: inline-block;
        }
      }
    }
    .message_x {
      ul {
        li {
          list-style: none;
          height: 110px;
          //   position: relative;
          overflow: hidden;
          margin-top: 30px;
          img {
            // margin-top: 10px;
            width: 170px;
            height: 80px;
            display: inline-block;
            float: left;
            margin-left: 10px;
          }
          span:nth-child(2) {
            margin-left: 70px;
          }
          span:nth-child(3) {
            margin-left: 32px;
          }
          span:nth-child(4) {
            margin-left: 29px;
          }
          span:nth-child(5) {
            margin-left: 83px;
          }
          span:nth-child(6) {
            margin-left: 100px;
          }
          span {
            //   position: absolute;
            //   top: 10px;
            //   left: 10px;
            display: inline-block;
            line-height: 80px;

            height: 20px;
          }
        }
      }
    }
  }
}
</style>