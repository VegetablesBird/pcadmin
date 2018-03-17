<template>
  <el-table :data="filterData()" border style="width: 100%" height="100%">
    <!--<el-table-column fixed label="显示二级" type="expand" width="100">
        <template slot-scope="props">
          <el-table :data="filterData(props.row.ID)" border style="width: 100%">
            <el-table-column prop="ID" label="ID" sortable width="80">
            </el-table-column>
            <el-table-column prop="level" label="栏目层级" width="100" :filters="[{text: 1, value: 1},{text: 2, value: 2}]" :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="columnName" label="栏目名">
            </el-table-column>
            <el-table-column prop="columnUrl" label="栏目地址">
            </el-table-column>
            <el-table-column prop="showFlag" label="是否显示" width="100" :filters="[{text: '是', value: true},{text: '否', value: false}]" :filter-method="filterHandler">
                <template slot-scope="scope">
                  <el-switch v-model="scope.row.showFlag" disabled></el-switch>          
                </template>
            </el-table-column>
            <el-table-column prop="priority" label="排序" sortable width="80">
            </el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
    </el-table-column>-->
    <el-table-column prop="ID" label="ID" sortable width="80">
    </el-table-column>
    <el-table-column prop="level" label="栏目层级" width="100" :filters="[{text: 1, value: 1},{text: 2, value: 2}]" :filter-method="filterHandler">
    </el-table-column>
    <!--<el-table-column prop="fatherID" label="父级栏目ID" :filters="levelFilters" :filter-method="filterHandler">
    </el-table-column>-->
    <el-table-column prop="columnName" label="栏目名">
    </el-table-column>
    <el-table-column prop="columnUrl" label="栏目地址">
    </el-table-column>
    <el-table-column prop="showFlag" label="是否显示" width="100" :filters="[{text: '是', value: true},{text: '否', value: false}]" :filter-method="filterHandler">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.showFlag" disabled></el-switch>          
        </template>
    </el-table-column>
    <el-table-column prop="priority" label="排序" sortable width="80">
    </el-table-column>
    <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import { getBackCol } from '../../../service/getData'
  export default {
    data () {
      return {
        dataList: []
      }
    },
    mounted () {
      getBackCol.then(res => {
        console.log(res)
        this.dataList = JSON.parse(res.data)
      })
    },
    computed: {
      // 获取过滤器数组
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
      filterHandler(value, row, column) {
        const property = column['property']
        return row[property] === value;
      },
      handleEdit(index, row) {
        // console.log(index, row)
        this.$router.push({ name: 'BackcolDetail', params: { id: row.ID }})
      },
      handleDelete(index, row) {
        // console.log(index, row)
      },
      filterData: function() {
        const self = this
        return this.dataList.filter(function(val){
          return val.fatherID == self.$route.params.typeID
        })
      }
    }
  }
</script>
