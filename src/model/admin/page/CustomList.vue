<template>
  <div class="tableBox">
    <div class="tbHeader">
      <el-button><router-link to="/CustomDetail/0">新增分类</router-link></el-button>
    </div>
    <div class="tbBody">
      <el-table :data="custom" border style="width: 100%" height="100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="栏目ID">
                <span>{{ props.row.ID }}</span>
              </el-form-item>
              <el-form-item label="栏目名称">
                <span>{{ props.row.customTypeName }}</span>
              </el-form-item>
              <el-form-item label="分类ID">
                <span>{{ props.row.typeID }}</span>
              </el-form-item>
              <el-form-item label="分类层级">
                <span>{{ props.row.typeLv }}</span>
              </el-form-item>
              <el-form-item label="显示">
                <span>{{ props.row.showFlag }}</span>
              </el-form-item>
              <el-form-item label="排序号">
                <span>{{ props.row.priority }}</span>
              </el-form-item>
              <el-form-item label="栏目Url">
                <span>{{ props.row.customUrl }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="ID" label="ID" sortable width="80">
        </el-table-column>
        <el-table-column prop="typeLv" label="分类层级" :filters="reExclusion(custom)" :filter-method="filterHandler" >
        </el-table-column>
        <el-table-column prop="customTypeName" label="栏目名">
        </el-table-column>
        <el-table-column prop="customUrl" label="栏目地址">
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
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    data () {
      return {
      }
    },
    mounted () {
      // this.getCustom()
    },
    computed: {
      ...mapState({
        custom() {
          return this.$store.state.custom.custom.filter(function(val){
            return val.ID != 1
          })
        }
      }),
    },
    methods: {
      //通过vuex获取数据
      // ...mapActions([
      //   'getCustom'
      // ]),

      // 排重
      reExclusion (dataArr) {
        const self = this
        const hash=[],arr=[];
        dataArr.forEach(function(el) {
          hash[el.typeLv]!=null
          if(!hash[el.typeLv]){
            arr.push({text: el.typeLv, value: el.typeLv})
            hash[el.typeLv]=true
          }
        })
        return arr
      },

      filterHandler(value, row, column) {
        const property = column['property']
        return row[property] === value;
      },
      handleEdit(index, row) {
        // console.log(index, row)
        this.$router.push({ name: 'CustomDetail', params: { id: row.ID }})
      },
      handleDelete(index, row) {
        // console.log(index, row)
      },
      
    }
  }
</script>

<style>
.tableBox{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tbHeader{
  margin-bottom: 20px;
}
.tbBody{
  flex: 1;
}


/*展开行样式*/
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
