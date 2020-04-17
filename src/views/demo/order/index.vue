<template>
  <d2-container>
    <h1>{{ msg }}</h1>
    <button @click="push_data">放进入</button><button @click="get_data">拿出来</button>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </d2-container>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      msg: 'gznb',
      data: [20, 20, 30, 10, 15, 12]
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: this.data
          }
        ]
      })
    },
    get_data () {
      this.data = [100, 200, 300, 400, 500, 600]
      this.drawLine()
    }
  }
}
</script>
