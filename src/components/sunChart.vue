<template>
  <div>
    <keep-alive>
      <div id="mySunChart" :style="{width: '100%', height: '400px'}"></div>
    </keep-alive>
    <!-- <button @click="changeOp">改变参数</button>
    <button @click="goNext">看看别的</button> -->
  </div>

</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      flag: true,
      optionData: {}
    };
  },
  mounted() {
    this.drawSun();
  },
  methods: {
    drawSun() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("mySunChart"),
        "light"
      );

      // 绘制图表
      var _this = this;
      myChart.setOption({
    series: {
        type: 'sunburst',
        data: [{
            name: 'A',
            value: 10,
            children: [{
                value: 3,
                name: 'Aa'
            }, {
                value: 5,
                name: 'Ab'
            }]
        }, {
            name: 'B',
            children: [{
                name: 'Ba',
                value: 4
            }, {
                name: 'Bb',
                value: 2
            }]
        }, {
            name: 'C',
            value: 3
        }]
    }
      });
    },
    // changeOp() {
    //   if (this.flag) {
    //     this.optionData.xAxisData = ["衬衫", "羊毛衫", "雪纺衫"];
    //     this.optionData.seriesData = [5, 20, 36];
    //     this.flag = false;
    //     this.drawLine();
    //   } else {
    //     this.optionData.xAxisData = ["裤子", "高跟鞋", "袜子"];
    //     this.optionData.seriesData = [10, 10, 20];
    //     this.flag = true;
    //     this.drawLine();
    //   }
    // },

    // timingGetTime() {
    //   setInterval(() => {
    //     this.optionData.seriesData.push(Math.round(new Date().getSeconds()));
    //     this.optionData.xAxisData.push(Math.round(new Date().getSeconds()));
    //     this.drawLine();
    //   }, 1000);
    // },
    // goNext() {
    //   this.$router.push({
    //     name: "sunChart"
    //   });
    // }
  }
};
</script>