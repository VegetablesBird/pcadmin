<template>
  <div>
    <label v-for="navMenu in navMenus" :key="navMenu.ID">
      <el-submenu v-if="navMenu.children" :key="navMenu.ID" :data="navMenu" :index="`${navMenu.ID}`">
        <template slot="title">
          <span>{{navMenu.customTypeName}}</span>
        </template>
        <NavMenu :navMenus="navMenu.children"></NavMenu>
      </el-submenu>
      <el-menu-item v-else :key="navMenu.ID" :index="`${navMenu.ID}`">
        <router-link slot="title" :to="'/' + navMenu.customUrl">{{navMenu.customTypeName}}</router-link>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navMenus'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
