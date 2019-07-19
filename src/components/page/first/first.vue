<template>
  <div class="box">
    <div class="first_title">当前位置：门店&nbsp;&nbsp;>&nbsp;&nbsp;首页</div>
    <div class="first">
      <div class="myChart">
        <p>会员人数占比</p>
        <div id="main" style="width:300px;height:140px"></div>

        <div class="first_but">
          <router-link to='/home/query'><button class="but1">查询</button></router-link>
          <router-link to='/home/register'><button class="but2">注册</button></router-link>
        </div>
      </div>
      <!-- *********************************************** -->
      <div class="myChart">
        <p>车辆使用比例</p>
        <div id="main1" style="width:300px;height:140px"></div>

        <div class="first_but">
          <router-link to='/home/query'><button class="but1">查询</button></router-link>
          <router-link to='/home/register'><button class="but2">注册</button></router-link>
        </div>
      </div>
      <!-- *********************************************** -->
      <div class="myChart">
        <p>预定订单成交率</p>
        <div id="main2" style="width:300px;height:140px"></div>

        <div class="first_but">
          <router-link to='/home/query'><button class="but1">查询</button></router-link>
          <router-link to='/home/register'><button class="but2">注册</button></router-link>
        </div>
      </div>
    </div>
    <div class="span_div">
      <div class="div_span">
        <span>用户租车时间表</span>
        <span>成交量/份</span>

        <div id="main3" style="width:503px;height:290px"></div>
      </div>
      <div class="Abus">
        <div class="Abus_div">
          <span>用户租车频率</span>
          <span>成交率</span>

          <div id="main4" style="width:503px;height:290px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");

export default {
  // *****************************************************************888
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "50%",
          data: ["会员人数", "全部用户人数"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            center: [80, 80],
            color: ["#FFBDBD", "#EF5D5D"],
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "10", //字体大小
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "会员人数" },
              { value: 310, name: "全部用户人数" }
            ]
          }
        ]
      },
      // *****************************************************************888
      optionn: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "50%",
          data: ["跑车租用量", "汽车租用量"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            center: [80, 80],
            color: ["#BDFFF1", "#00E3B2"],
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "15", //字体大小
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 100, name: "跑车租用量" },
              { value: 300, name: "汽车租用量" }
            ]
          }
        ]
      },
      // *****************************************************************888
      optionnn: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "50%",
          data: ["订单下单数量", "成交订单数量"]
        },

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            center: [80, 80],
            color: ["#FFDEC2", "#F7964A"],
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "10", //字体大小
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 300, name: "订单下单数量" },
              { value: 150, name: "成交订单数量" }
            ]
          }
        ]
      },
      // *****************************************************************888
      optionp: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["3月", "4月", "5月", "6月", "7月", "9月"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 2600, 1997, 2800],
            type: "line",
            areaStyle: {},
            smooth: true
          }
        ]
      },
      // *****************************************************************888
      optionpp: {
        tooltip: {
          trigger: "item",
          formatter: "{b}:\n{c}%"
        },
        xAxis: {
          type: "category",
          data: ["3月", "4月", "5月", "6月", "7月", "9月"]
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: [10, 52, 40, 34, 39, 70],
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{b}:\n{c}%"
                
              }
            }
          }
        ]
      }
    };
  },

  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    var myChart1 = echarts.init(document.getElementById("main1"));
    var myChart2 = echarts.init(document.getElementById("main2"));
    var myChart3 = echarts.init(document.getElementById("main3"));
    var myChart4 = echarts.init(document.getElementById("main4"));

    myChart.setOption(this.option);
    myChart1.setOption(this.optionn);
    myChart2.setOption(this.optionnn);
    myChart3.setOption(this.optionp);
    myChart4.setOption(this.optionpp);
    // console.log(this.option);
  }
};
</script>

<style lang="less" scoped>
.box {
  width:100%;
  height:100%;
  padding: 0 20px;
  .first_title {
    font-size: 10px;
    font-weight: 700;
  }
  .first {
    overflow: hidden;
    //   padding: 0 20px;
    //   height: 100%;
    .myChart {
      float: left;
      margin-left: 20px;
    }

    p {
      font-size: 18px;
      text-align: center;
      margin-top: 30px;
      color: #333333;
    }
    .first_but {
      button {
        border: none;
        width: 80px;
        height: 25px;
        background-color: #ffd409;
        border-radius: 5px;
        cursor: pointer;
      }
      .but1 {
        margin-left: 40px;
      }
      .but2 {
        margin-left: 85px;
      }
    }
  }
  .span_div {
    position: relative;
    #main3 {
      position: absolute;
      top: 15px;
    }
    .div_span {
      //   height: 25px;
      span {
        display: block;
        position: absolute;
        height: 25px;
      }
      span:nth-child(1) {
        font-size: 15px;
        top: 10px;
        left: 10px;
      }
      span:nth-child(2) {
        font-size: 10px;
        top: 45px;
        left: 10px;
      }
    }
  }
  .Abus {
    position: relative;
    .Abus_div {
      #main4 {
        float: right;
        margin-top: 15px;
      }
      span {
        position: absolute;
        display: block;
      }
      span:nth-child(1) {
        font-size: 15px;
        top: 10px;
        right: 392px;
      }
      span:nth-child(2) {
        font-size: 10px;
        top: 45px;
        right: 446px;
      }
    }
  }
}
</style>


