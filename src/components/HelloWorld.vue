<template>
  <div>
    <keep-alive>
      <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
    </keep-alive>
    <button @click="changeOp">改变参数</button>
    <button @click="timingGetTime">动态push值</button>
    <button @click="goNext">看看别的</button>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag: true,
      timing: true,
      optionData: {}
    }
  },
  mounted () {
    this.changeOp()
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById('myChart'),
        'light'
      )

      // 绘制图表
      var _this = this
      myChart.setOption({
        title: {
          text: '在Vue中使用echarts'
        },
        tooltip: {},
        xAxis: {
          data: _this.optionData.xAxisData
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: _this.optionData.seriesData
          }
        ]
      })
    },
    changeOp () {
      if (this.flag) {
        this.optionData.xAxisData = ['衬衫', '羊毛衫', '雪纺衫']
        this.optionData.seriesData = [5, 20, 36]
        this.flag = false
        this.drawLine()
      } else {
        this.optionData.xAxisData = ['裤子', '高跟鞋', '袜子']
        this.optionData.seriesData = [10, 10, 20]
        this.flag = true
        this.drawLine()
      }
    },

    timingGetTime () {
      this.optionData.seriesData.push(Math.round(new Date().getSeconds()))
      this.optionData.xAxisData.push(Math.round(new Date().getSeconds()))
      this.drawLine()
    },
    goNext () {
      this.timing = false
      this.timingGetTime()
      this.$router.push({
        name: 'sunChart'
      })
    }
  }
}
</script>
