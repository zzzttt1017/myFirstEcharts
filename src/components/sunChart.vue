<template>
  <div>
    <keep-alive>
      <div id="mySunChart" :style="{width: '100%', height: '400px'}"></div>
    </keep-alive>
    <!-- <button @click="changeOp">改变参数</button>
    <button @click="goNext">看看别的</button> -->
      <button @click="goNext">来点炫酷的</button>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag: true,
      optionData: {}
    }
  },
  mounted () {
    this.drawSun()
  },
  methods: {
    drawSun () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById('mySunChart'),
        'light'
      )

      // 绘制图表
      myChart.setOption({
        title: {
          text: '拉个图图',
          subtext: '嘿嘿嘿？',
          borderColor: '#ccc'
        },
        series: {
          type: 'sunburst',
          data: [{
            name: '张涛',
            value: 10,
            children: [{
              value: 3,
              name: '自作主张在'
            }, {
              value: 7,
              name: '少时诵诗书'
            }]
          }, {
            name: '钟英',
            children: [{
              name: '萨发广告',
              value: 4
            }, {
              name: '滑哥饭店啥',
              value: 2
            }]
          }, {
            name: '跑跑',
            value: 3
          }]
        }
      })
    },
    goNext () {
      this.$router.push({
        name: 'aGoodDemo'
      })
    }
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
}
</script>
