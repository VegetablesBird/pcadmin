<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <a href="admin.html">admin</a>
    <div>{{cs}}</div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return{
      cs: 'asd'
    }
  },
  mounted() {
    const self = this
  //   axios.get('http://localhost:4714/api/values/1',{
      
  //   }).then(function(res) {
  //     self.cs = res.data
  //     console.log(res.data)
  //   })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
