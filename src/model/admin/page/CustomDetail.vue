<template>
  <div>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="栏目ID">
          <el-input v-model="form.ID"></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
          <el-cascader v-model="form.typeIDArr" expand-trigger="click" :change-on-select=true :options="GetSubMenu(0, $store.state.custom.custom)" :props="props" @change="handleChange">
          </el-cascader>
        </el-form-item>
        <el-form-item label="分类层级">
          <el-input-number v-model="form.typeLv" :min="1" :max="100" label="分类层级" disabled></el-input-number>
        </el-form-item>
        <el-form-item label="分类ID">
          <el-input v-model="form.typeID" label="分类ID" disabled></el-input>
        </el-form-item>
        <el-form-item label="栏目名称">
          <el-input v-model="form.customTypeName"></el-input>
        </el-form-item>
        <el-form-item label="栏目地址">
          <el-input v-model="form.customUrl"></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-switch v-model="form.showFlag"></el-switch>
        </el-form-item>
        <el-form-item label="排序号">
          <el-input-number v-model="form.priority" :min="1" :max="100" label="排序号"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <button @click="goBack">返回上一页</button>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import qs from "qs"
  
  import { getCustomType, getCustomDetail, postCustom } from '../../../service/getData'
  import { GetSubMenu } from '../components/common/mixin.js'

  export default {
    data () {
      return {
        form: {
          ID: 0,
          typeID: null,
          typeIDArr: [],
          customTypeName: "",
          showFlag: true,
          priority: 1,
        },
        props: {  // 修改elementUI的默认值（具体看官网）
          label: 'customTypeName',
          value: 'ID',
          children: 'children'
        }
      }
    },
    watch: {
      "$route": "getData",  // 监听路由变化，调用getData函数
      "customDetail": "getData",  // customDetail数据发生变化时重新赋值form
    },

    mixins: [GetSubMenu],

    mounted () {
      this.getData()
    },
    computed: {
      customDetail () {
        return this.$store.getters.getCustomDetail(this.$route.params.id)
      }
    },
    methods: {
      // 获取数据
      getData () {
        // 当routeID == 0 时为增加行为，> 0  时为修改行为        
        const routeID = this.$route.params.id
        if (routeID && routeID != 0) {
          // 获取的数据和默认数据合并
          Object.assign(this.form, this.customDetail)
          // 获取当前分类ID路径（数组）提供“所属分类”使用(getSubRoute方法通过GetSubMenu混合过来)
          this.form.typeIDArr = this.getSubRoute(routeID, this.$store.state.custom.custom, [])
        }
      },

      // 表单提交事件
      onSubmit () {
        postCustom(qs.stringify(this.form)).then(res => {
          // 表单提交成功时，重新触发getCustom获取栏目列表数据
          this.$store.dispatch('getCustom')

          const resData = JSON.parse(res.data)
          if (resData.bResult) {
            alert("修改成功")
            this.$router.go(-1)
            // this.$router.push({ name: 'CustomList' })
          } else {
            alert(resData.bResult)
            console.log(resData.sResult)
          }
        }).catch(function (err) {
          alert("修改失败")
          console.log(err)
        })
      },
      // “所属分类”发生变化时
      handleChange (value) {
        this.form.typeLv = value.length
        this.form.typeID = value[value.length - 1]
      },
      // 返回上一级页面
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

