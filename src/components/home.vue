<template>
  <div class="home">
    <!-- 头部 -->
    <header>
      <div class="left">平驾后台管理系统</div>
      <div class="right">
        <img src="./img/组 9@2x(2).png" alt="头像" />
        <span>你好！茜茜</span>
        <span></span>
        <span></span>
        <span><router-link to='/'></router-link></span>
      </div>
    </header>
    <div class="container">
      <Aside></Aside>
      <section>
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import Aside from "./aside";
export default {
  components: {
    Aside
  }
};
</script>

<style scopde lang='less'>
* {
  padding: 0;
  margin: 0;
}
.home {
  width:100%;
  height:100%;
  header {
    height: 15%;
    background: rgb(27, 27, 27);
    color: white;
    overflow: hidden;
    .left {
      float: left;
      line-height: 100px;
      margin-left: 51px;
      font-size: 23px;
    }
    .right {
      height:100px;
      float: right;
      margin-right: 20px;
      font-size: 16px;
      overflow: hidden;
      img {
        margin-top:16px;
        width: 62px;
        height: 62px;
        float: left;
      }
      span{
        cursor: pointer;
        display: inline-block;
        margin-top:42px;
        float: left;
      }
      span:nth-of-type(1){
        margin:42px 30px 0;
      }
      span:nth-of-type(2) {
        width: 21px;
        height: 21px;
        background: url('./img/1.png') no-repeat center center;
        background-size:100% 100%;
      }
      a{
        display: inline-block;
        width:20px;
        height:20px;
      }
      span:nth-of-type(3) {
        width: 21px;
        height: 21px;
        background: url('./img/2.png') no-repeat center center;
        background-size:100% 100%;
      }
      span:nth-of-type(4) {
        width: 21px;
        height: 21px;
        background: url('./img/3.png') no-repeat center center;
        background-size:100% 100%;
      }
    }
  }
  .container {
    height:85%;
    overflow: hidden;
    section {
      width:78%;
      height:100%;
      float: left;
      overflow: hidden;
    }
  }
}
</style>

