<template>
  <div class="register">
    <p class="top">当前位置：门店 > 会员管理 > 会员注册</p>
    <div class="con">
      <div class="left">
        <h1>会员基本信息</h1>

        <el-upload
          class="avatar-uploader" 
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <span v-else class="el-icon-plus avatar-uploader-icon">+</span>
        </el-upload>

        <div>
          <span @click='old_'></span>
          <span @click='del'></span>
        </div>
      </div>
      <div class="right">
        <form action>
          <p>
            <span class="span">
              姓名
              <span>*</span>
            </span>
            <input type="text" required placeholder="请输入姓名" />
          </p>
          <p>
            <span class="span">
              手机号
              <span>*</span>
            </span>
            <input
              type="text"
              required
              pattern="/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/"
              placeholder="请输入手机号码"
            />
          </p>
          <p>
            <span class="span">
              证件号
              <span>*</span>
            </span>
            <input
              type="text"
              required
              pattern=" /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/"
              placeholder="请输入身份证号"
            />
          </p>
          <p>
            <span class="span">邮箱</span>
            <input type="text" placeholder="请输入邮箱地址" />
          </p>
          <p>
            <button>保存</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:"data:image/jpeg;base64,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"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        alert("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        alert("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    del(){
      this.imageUrl='';
    },
    old_(){
      this.imageUrl="data:image/jpeg;base64,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"
    }
  }
};
</script>

<style lang="less" scoped>
.register {
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
  .con {
    width: 100%;
    height: 100%;
    background: white;
    overflow: hidden;

    .left {
      float: left;
      margin: 23px 0 0 21px;
      h1 {
        font-size: 18px;
        font-weight: normal;
        color: #333333;
      }
      div:nth-of-type(2) {
        margin: 20px 0 0 84px;
        span {
          display: inline-block;
          width: 25px;
          height: 25px;
          cursor: pointer;
        }
        span:nth-of-type(1) {
          background: url("./../../img/更换@2x.png") no-repeat center center;
          background-size: 25px 25px;
        }
        span:nth-of-type(2) {
          background: url("./../../img/删除筛选项@2x.png") no-repeat center
            center;
          background-size: 25px 25px;
        }
      }
    }
    .right {
      float: left;
      margin: 107px 0 0 140px;
      color: #333333;
      p {
        margin-bottom: 25px;
        .span {
          display: inline-block;
          width: 60px;
          text-align: right;
          span {
            color: red;
          }
        }
        input {
          margin-left: 20px;
          width: 160px;
          height: 35px;
          border-radius: 5px;
          outline: none;
        }
        button {
          margin: 25px 0 0 55px;
          width: 130px;
          height: 50px;
          border: none;
          border-radius: 5px;
          background: #ffd409;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
<style>
.left .avatar-uploader{
  margin:68px 0 0 45px;
}
.left .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  width: 120px;
  height: 120px;
  overflow: hidden;
}
.left .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.left .avatar-uploader-icon {
  font-size: 40px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  display: inline-block;
  line-height: 120px;
  text-align: center;
}
.left .avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>
