<template>
  <div id="app" :style="{height: height}">

    <router-view :height="height"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      height: ''
    }
  },
  created () {
    this.height = this.getClientHeight() + 'px'
  },
  methods: {
    getClientHeight () {
      let clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
      } else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
      }
      return clientHeight
    }
  }
}
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
