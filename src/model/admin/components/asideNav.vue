<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" 
      @open="handleOpen"
      @close="handleClose">
      <NavMenu :navMenus="GetSubMenu(1, backCol)"></NavMenu> 
    </el-menu>
  </div>
</template>

<script>
  // import axios from 'axios'
  import NavMenu from '../components/NavMenu.vue'
  import { getBackCol, getCustomType } from '../../../service/getData'
  import { GetSubMenu } from '../components/common/mixin.js'
  export default {
    data () {
      return {
        backCol: []
      }
    },
    components: {
      NavMenu
    },
    mixins: [ GetSubMenu ],
    mounted () {
      getCustomType.then(res => {
        // 获取顶级下的所有一级分类（不显示顶级出来）
        this.backCol = JSON.parse(res.data)
      })
    },
    computed: {

    },
    methods: {
      // 获取第（navLevel）级的导航数据
      // getLevel (navLevel ,fatherID) {
      //   return this.backCol.filter(function (item) {
      //     return item.typeLv === navLevel && item.typeID === fatherID
      //   }).sort(function(a, b){
      //     return a.priority - b.priority
      //   })
      // },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath)
      }
    }
  }
</script>
