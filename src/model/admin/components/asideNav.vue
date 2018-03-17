<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" 
      @open="handleOpen"
      @close="handleClose">
      <NavMenu :navMenus="backCol"></NavMenu> 
    </el-menu>
  </div>
</template>

<script>
  // import axios from 'axios'
  import NavMenu from '../components/NavMenu.vue'
  import { getBackCol, getCustomType } from '../../../service/getData'
  export default {
    data () {
      return {
        backCol: []
      }
    },
    components: {
      NavMenu
    },
    mounted () {
      getCustomType.then(res => {
        this.backCol = JSON.parse(res.data)
      })
    },
    computed: {

    },
    methods: {
      // 获取第（navLevel）级的导航数据
      getLevel (navLevel ,fatherID) {
        return this.backCol.filter(function (item) {
          return item.typeLv === navLevel && item.typeID === fatherID
        }).sort(function(a, b){
          return a.priority - b.priority
        })
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
