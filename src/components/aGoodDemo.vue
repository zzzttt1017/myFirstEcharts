<template>
  <div id="map-chart-root">
    <keep-alive>
      <div id="mapChart" :style="{width: '100%', height: height}"></div>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      Data: [],
      maxValue: 100,
      autoGetDataInterval: null
    }
  },
  props: {
    height: {
      type: String,
      default () {
        '960px'
      }
    }
  },
  created () {
    this.initialization()
  },
  mounted () {
  },
  methods: {
    initialization () { // 初始化数据
      let cityList = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门']
      for (let i in cityList) {
        let value = Math.round(Math.random() * 1000) // 产生0到1000的整数
        let list = {name: cityList[i], value: value}
        this.Data.push(list)
      }
      setTimeout(() => {
        this.drawMapChart()
      })

      this.autoGetDataInterval = setInterval(() => { // 定时获取数据并绘制
        for (let i in this.Data) {
          this.Data[i].value = Math.round(Math.random() * 1000)
        }
        this.maxValue = this.getMaxValue(this.Data)
        this.drawMapChart()
      }, 3000)
    },
    getMaxValue (arr) { // 获取最大的车辆数
      let arr2 = []
      for (let i in arr) {
        arr2.push(arr[i].value)
      }
      return parseInt(Math.max(...arr2))
    },
    drawMapChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById('mapChart'),
        'light'
      )

      let option = {
        baseOption: {
          title: {
            text: '车辆探知来源地色差分布',
            textStyle: {
              color: '#fff',
              fontSize: '40',
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
            // max: this.maxValue,//取最大值自动分段
            max: 1000,
            // pieces: [ // 自定分段
            //   {min: 1500},
            //   {min: 900, max: 1500},
            //   {min: 310, max: 1000},
            //   {min: 200, max: 300},
            //   {min: 10, max: 200, label: '10 到 200（自定义label）'},
            //   {value: 123, label: '123（自定义特殊颜色）', color: 'grey'},
            //   {min: 5, max: 5, label: '5（自定义特殊颜色）', color: 'black'},
            //   {max: 5}
            // ],
            splitNumber: 4,
            right: '5%',
            top: '40%',
            textStyle: {
              color: '#fff',
              fontSize: '30',
              fontWeight: 'normal'
            },
            color: ['#C81F2C', '#FE9143', '#FE9798', '#A6A6A6'],
            itemSymbol: 'arrow',
            itemWidth: '80',
            itemHeight: '30',
            align: 'auto',
            itemGap: 30
          },
          // toolbox: {
          //   show: true,
          //   orient: 'vertical',
          //   left: 'right',
          //   top: 'center',
          //   feature: {
          //     mark: {show: true},
          //     dataView: {show: false, readOnly: false},
          //     restore: {show: false},
          //     saveAsImage: {show: true}
          //   }
          // },
          series: [
            {
              normal: {label: {show: true}},
              selectedMode: 'single',
              hoverable: false,
              left: 'center',
              top: 'middle',
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
                borderWidth: 1.2
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: '#fff'
                }
              },
              data: this.Data
            }
          ]
        },
        media: [ // 媒体查询
          {
            query: {maxHeight: 736}, // 规则。
            option: { // 规则满足下的option。
              title: {
                textStyle: {
                  color: '#fff',
                  fontSize: '30',
                  fontWeight: '100'
                },
                left: 'center',
                top: '2'
              },
              visualMap: {
                right: '5%',
                top: '10%',
                textStyle: {
                  color: '#fff',
                  fontSize: '12',
                  fontWeight: 'normal'
                },
                itemSymbol: 'arrow',
                itemWidth: '30',
                itemHeight: '12',
                align: 'auto',
                itemGap: 12
              }
            }
          }
        ]

      }
      // 绘制图表
      myChart.setOption(option)
    }

  },
  destroyed () {
    clearInterval(this.autoGetDataInterval)
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
