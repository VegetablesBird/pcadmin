<template>
  <el-container class="app">
    <el-header class="header">Element UI</el-header>
    <el-container class="container">
      <el-aside class="aside">
        <aside-nav></aside-nav>
      </el-aside>
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideNav from './components/asideNav'
export default {
  name: 'App',
  components: {
    AsideNav
  }
}
</script>

<style>
@import './style/common';
.app{
  height: 100%;
  overflow: hidden;
}
.header{
  background-color: #409eff;
  color: #fff;
  line-height: 60px;
  font-weight: bold;
  font-size: 24px;
}
.aside{
  width: 200px;
  background-color: #f4f4f5;
  /*overflow: hidden;*/
}
.main{
  height: inherit;
  min-width: 0;
  white-space: normal;
}
</style>
