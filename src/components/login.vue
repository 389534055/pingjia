<template>
    <div class='login'>
        <div class='out'>
            <p>用户名: <input type="text"> </p>
            <p>密码: <input type="password"></p>
            <p><span>忘记密码</span></p>
            <p><button><router-link to='/home'>登录</router-link></button></p>
        </div>
     
    </div>
</template>

<script>
export default {
    mounted(){
        this.axios.get('http://172.25.5.207:8080/accountController/findnpwd').then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    }
}
</script>

<style scopde lang='less'>
.login{
    width:100%;
    height:100%;
    background:url("./img/bg.jpg@2x.png") no-repeat 0 0;
    background-size:100% 100%;
    .out{
        width:364px;
        height:411px;
        background:url("./img/login.png@2x.png") no-repeat 0 0;
        position: absolute;
        right:210px;
        bottom:100px;
        p{
            width:310px;
            height:52px;
            background:white;
            margin: 48px auto 0;
            line-height:52px;
            text-indent: 33px;
            font-size:18px;
            color:#666666;
            input{
                border:none;
                outline: none;
            }
        }
        p:nth-of-type(3){
            background:transparent;
            margin:0;
            height:48px;
            line-height:48px;
            text-indent: 0;
            overflow: hidden;
            width:100%;
            span{
                float:right;
                font-size:14px;
                margin-right:70px;
                cursor: pointer;
            }
            background:url('./img/icon.png@2x.png') no-repeat 300px center;
        }
        p:last-child{
            margin:0 auto;
            text-indent: 0;
            button{
                width: 100%;
                height:100%;
                border:none;
                background:#ffd409;
                a{
                    text-decoration: none;
                    color:white;
                    font-size:24px;
                }
            }
        }
    }
}
</style>


