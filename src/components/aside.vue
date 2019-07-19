<template>
  <aside>
    <h3>门店</h3>
    <div>
      <p>
        <router-link to="/home/first">首页</router-link>
      </p>
    </div>
    <div>
      <p @click="u">会员管理</p>
      <ul v-show="$store.state.show">
        <li>
          <keep-alive>
            <router-link to="/home/register">会员注册</router-link>
          </keep-alive>
        </li>
        <li>
          <keep-alive>
            <router-link to="/home/query">会员查询</router-link>
          </keep-alive>
        </li>
      </ul>
    </div>
    <div>
      <p><router-link to="/home/y_manage">预订</router-link></p>
    </div>
    <div>
      <p><router-link to="/home/f_manage">费用结算</router-link></p>
    </div>
    <div>
      <p>
        <keep-alive>
          <router-link to="/home/car_manage">车辆管理</router-link>
        </keep-alive>
      </p>
    </div>
  </aside>
</template>
<script>
export default {
  methods: {
    u() {
      this.$store.commit("u");
    },
  }
};
</script>
<style lang="less" scoped>
aside {
  color: white;
  float: left;
  width: 22%;
  height: 100%;
  background: rgb(67, 67, 67);
  h3 {
    font-size: 18px;
    font-weight: normal;
    background:url('./img/bg7.png') no-repeat 35px center,url('./img/bg8.png') no-repeat 240px center ;
    background-size: 40px 30px,24px 30px;
  }
  div:nth-of-type(1){
    p{
        background:url('./img/bg9.png') no-repeat 35px center;
        background-size: 30px 30px;
    }
  }
  div:nth-of-type(2){
    p{
        background:url('./img/bg2.png') no-repeat 35px center,url('./img/bg3.png') no-repeat 240px center;
        background-size: 30px 30px;
    }
  }
  div:nth-of-type(3){
    p{
        background:url('./img/bg4.png') no-repeat 35px center;
        background-size: 30px 30px;
    }
  }
  div:nth-of-type(4){
    p{
        background:url('./img/bg5.png') no-repeat 35px center;
        background-size: 30px 30px;
    }
  }
  div:nth-of-type(5){
    p{
        background:url('./img/bg6.png') no-repeat 35px center;
        background-size: 30px 30px;
    }
  }
  ul {
    li {
      list-style: none;
      a {
        font-size: 14px;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
    display: block;
  }
  .router-link-active {
    background: rgb(255, 212, 9);
    border-left: 7px solid white;
  }
}
h3,
p,
li {
  height: 40px;
  line-height: 40px;
  text-indent: 113px;
  font-size: 16px;
}
p:hover{
    cursor: pointer;
}
</style>


