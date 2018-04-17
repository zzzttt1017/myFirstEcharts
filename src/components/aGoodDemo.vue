<template>
  <div id="map-chart-root">
    <keep-alive>
      <div id="myBigChart" :style="{width: '100%', height: '960px'}"></div>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
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
        document.getElementById('myBigChart'),
        'light'
      )

      // 绘制图表
      myChart.setOption({
        title: {
          text: '车辆探知来源地色差分布',
          subtext: '假数据',
          textStyle: {
            color: '#fff',
            fontSize: '30',
            fontWeight: '100'
          },
          left: 'center',
          top: '20'
        },
        tooltip: {
          trigger: 'item'
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 'left',
        //   data: ['iphone3', 'iphone4', 'iphone5']
        // },
        visualMap: {
          min: 0,
          max: 100,
          splitNumber: 5,
          right: '5%',
          top: '10%',
          textStyle: {
            color: '#fff'
          },
          color: ['#C81F2C', '#FE9143', '#FE9798', '#A6A6A6'],
          itemSymbol: 'circle',
          itemWidth: 80,
          itemHeight: 20

        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: {show: true},
            dataView: {show: false, readOnly: false},
            restore: {show: false},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: '车辆',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
              show: false,
              color: '#fff',
              emphasis: {
                color: '#000',
                fontWeight: 'bolder'
              }
            },
            itemStyle: {
              areaColor: '#fff',
              borderWidth: 1

            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: '#fff'
              }
            },
            data: [
              {name: '北京', value: Math.round(Math.random() * 100)},
              {name: '天津', value: Math.round(Math.random() * 100)},
              {name: '上海', value: Math.round(Math.random() * 100)},
              {name: '重庆', value: Math.round(Math.random() * 100)},
              {name: '河北', value: Math.round(Math.random() * 100)},
              {name: '河南', value: Math.round(Math.random() * 100)},
              {name: '云南', value: Math.round(Math.random() * 100)},
              {name: '辽宁', value: Math.round(Math.random() * 100)},
              {name: '黑龙江', value: Math.round(Math.random() * 100)},
              {name: '湖南', value: Math.round(Math.random() * 100)},
              {name: '安徽', value: Math.round(Math.random() * 100)},
              {name: '山东', value: Math.round(Math.random() * 100)},
              {name: '新疆', value: null}, // Math.round(Math.random() * 100)
              {name: '江苏', value: Math.round(Math.random() * 100)},
              {name: '浙江', value: Math.round(Math.random() * 100)},
              {name: '江西', value: Math.round(Math.random() * 100)},
              {name: '湖北', value: Math.round(Math.random() * 100)},
              {name: '广西', value: Math.round(Math.random() * 100)},
              {name: '甘肃', value: Math.round(Math.random() * 100)},
              {name: '山西', value: Math.round(Math.random() * 100)},
              {name: '内蒙古', value: Math.round(Math.random() * 100)},
              {name: '陕西', value: Math.round(Math.random() * 100)},
              {name: '吉林', value: Math.round(Math.random() * 100)},
              {name: '福建', value: Math.round(Math.random() * 100)},
              {name: '贵州', value: Math.round(Math.random() * 100)},
              {name: '广东', value: Math.round(Math.random() * 100)},
              {name: '青海', value: Math.round(Math.random() * 100)},
              {name: '西藏', value: Math.round(Math.random() * 100)},
              {name: '四川', value: Math.round(Math.random() * 100)},
              {name: '宁夏', value: Math.round(Math.random() * 100)},
              {name: '海南', value: Math.round(Math.random() * 100)},
              {name: '台湾', value: Math.round(Math.random() * 100)},
              {name: '香港', value: Math.round(Math.random() * 100)},
              {name: '澳门', value: Math.round(Math.random() * 100)}
            ]
          }
        ]
      })
    }

  }
}
</script>

<style scoped>
    #map-chart-root{
        background: #04455C; /* Old browsers */
        background: -moz-linear-gradient(top, #04455C 0%, #04435C 1%, #022341 99%, #021032 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #04455C 0%,#04435C 1%,#022341 99%,#021032 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #04455C 0%,#04435C 1%,#022341 99%,#021032 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#04455C', endColorstr='#021032',GradientType=0 ); /* IE6-9 */
    }
</style>
