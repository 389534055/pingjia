<template>
    <div class='y_manage'>
        <p class="top">当前位置：门店 >预订</p>
        <div>
            <h1>请输入要查询的信息</h1>
            <p>手机号<input type="text"><button><router-link to="/home/accept">查询</router-link></button></p>
        </div>
        <table>
            <tr>
                <td>客户姓名</td>
                <td>手机号码</td>
                <td>租赁方式</td>
                <td>车型</td>
                <td>证件类型</td>
                <td>证件号码</td>
                <td>取车时间</td>
                <td>操作</td>
            </tr>
            
            <tr>
                <td>张张</td>
                <td>1370998340667</td>
                <td>时租</td>
                <td>SUV</td>
                <td>居民身份证</td>
                <td>411126543284734094</td>
                <td>2019-7-1</td>
                <td><span></span><span></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.y_manage {
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
  }
  div{
      padding:25px;
      background:white;
      margin-bottom:20px;
      h1{
          font-size:18px;
          font-weight: normal;
          margin-bottom: 20px;
      }
      p{
          input{
              width:160px;
              height:32px;
              margin:0 160px 0 20px;
              border-radius: 3px;
              outline: none;
              background:url('./img/icon.png@2x.png') no-repeat right center;
          }
          button{
              border:none;
              a{
                  border-radius: 5px;
                  display: block;
                  width:92px;
                  height:32px;
                  background:rgb(255,212,9);
                  text-decoration: none;
                  line-height:32px;
                  text-align: center;
                  color:black;
              }
          }
      }
  }
  table{
     width:100%;
     text-align:center;
     border-collapse:collapse;
     tr{
         height:40px;
         line-height:40px;
     }
      tr:nth-of-type(2n+1){
          background:white;
      }
      tr:nth-of-type(2n){
          background: #cccccc;;
      }
      tr:nth-of-type(1){
          background:rgb(254,237,157);
      }
      td{
          span{
              display: inline-block;
              width:25px;
              height:30px;
              cursor: pointer;
              margin-top:7px;
          }
          span:nth-of-type(1){
              background:url('./../member/img/bian.png') no-repeat center center;
              background-size:100% 100%;
          }
          span:nth-of-type(2){
              background:url('./../member/img/del.png') no-repeat center center;
              background-size:100% 100%;
          }
      }
  }
}
</style>