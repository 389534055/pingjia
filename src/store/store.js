import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    //数据库
    state: {
      //侧边栏
      show:false,
    },
    //修改数据
    mutations:{
      u(state){
        state.show=!state.show;
      },
      
    },
})