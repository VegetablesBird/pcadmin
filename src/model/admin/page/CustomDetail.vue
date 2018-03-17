<template>
  <div>
    <span>asd{{numReg('-1-2-3-')}}</span>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <!--<el-form-item label="所属层级">
          <el-input-number v-model="form.typeLv" :min="0" :max="100" label="描述文字"></el-input-number>
        </el-form-item>-->
        <el-form-item label="栏目ID">
          <el-input v-model="form.ID"></el-input>
        </el-form-item>
        <el-form-item label="层级">
          <el-input-number v-model="form.typeLv" :min="1" :max="100" label="层级"></el-input-number>
        </el-form-item>
        <el-form-item label="所属分类">
          <el-select v-model="form.typeID" placeholder="请选择活动区域">
            <el-option v-for="item in dataList" :key="item.ID" :label="'— '.repeat(item.typeLv - 2) + item.customTypeName" :value="item.ID"></el-option>
          </el-select>
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
  </div>
</template>

<script>
  import qs from "qs"
  import { getCustomType, getCustomDetail, postCustom } from '../../../service/getData'
  export default {
    data () {
      return {
        form: {
          ID: 0,
          typeID: null,
          customTypeName: "",
          showFlag: true,
          priority: 1,
        },
        options2: [],
        dataList:[],
        props: {
          value: 'label',
          children: 'cities'
        }
        // form: {
        //   name: '',
        //   region: '',
        //   date1: '',
        //   date2: '',
        //   delivery: false,
        //   type: [],
        //   resource: '',
        //   desc: ''
        // }
      }
    },
    watch: {
      "$route": "getData"  // 监听路由变化，调用getData函数
    },
    mounted () {
      this.getData()

      getCustomType.then(res => {
        this.dataList = JSON.parse(res.data)
        // console.log(res.data)
        this.getCS()
      })
    },
    computed: {
      // 获取过滤器数组s
      // levelFilters: function(){
      //   const levelArr = []
      //   Array.from(new Set(this.dataList)).map(function(value, index, arr){
      //     levelArr.push({text: value.columnName, value: value.ID})
      //   })
      //   // console.log(levelArr)
      //   return levelArr
      // },
      
    },
    methods: {
      // 获取数据
      getData() {
      // 当routeID == 0 时为增加行为，> 0  时为修改行为        
        const routeID = this.$route.params.id
        const self = this
        if(routeID && routeID != 0 ) {
          getCustomDetail(self.$route.params.id).then(res => {
            self.form = JSON.parse(res.data)[0]
          })
        } else {
          self.form =  {
            ID: 0,
            typeID: null,
            customTypeName: "",
            showFlag: true,
            priority: 1,
          }
        }
      },

      onSubmit() {
        postCustom(qs.stringify(this.form)).then(res => {
          // console.log(res)
        })
      },

      getDataByLv(tID) {
        this.dataList.filter(el => {
          return tID == el.typeLv
        })
      },

      numReg(str) {
        // console.log(str)
        // str = str == null ? "" : str
        // let reg = /\d(?=-(?!.*-))/
        // let cs = str.match(reg)[0]
        let cs = '3'
        return cs
      },

    }
  }
</script>

