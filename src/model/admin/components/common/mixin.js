export const GetSubMenu = {
  methods: {
    /**
     * 将栏目列表转化为树形结构
     * @param {树形结构顶层ID} tId 
     * @param {原始数组数据} arr 
     */
    GetSubMenu(tId ,arr) {
      const self = this
      const dataArr = arr.filter(function(val){
        return val.typeID == tId
      })
      const sb = []
      if (dataArr.length > 0) {
        dataArr.forEach(function(el) {
          const childrenArr = self.GetSubMenu(el.ID, arr)
          let arrObj
          if(childrenArr.length > 0) {
            arrObj = Object.assign({}, el, {"children": childrenArr})            
          }
          else {
            arrObj = el
          }
          sb.push(arrObj)
        })
      }
      return sb
    },
    /**
     * 根据某个节点（ID）向上查找获取节点路径
     * @param {*} Id 
     * @param {*} arr 
     */
    getSubRoute(Id ,arr, idArr) {
      if (idArr.length < 100) {
        const thisArr = arr.find(function(x){
          return x.ID == Id 
        })
        if(thisArr){
          idArr.unshift(Id)
          const fId = thisArr.typeID
          this.getSubRoute(fId, arr, idArr)
        }
      }
      return idArr
    }
  }
}