import axios from 'axios'

// 获取后台左侧栏目列表数据
export const getBackCol = axios.get('http://localhost:4714/api/BackCol')

// 获取栏目详细页数据
export const getBackColDetail = (id) => axios.get('http://localhost:4714/api/BackCol/' + id)

// 获取T_CustomTypeMng表的所有数据
export const getCustomType = axios.get('http://localhost:4714/api/CustomType')

// 获取栏目详细页数据
export const getCustomDetail = (id) => axios.get('http://localhost:4714/api/CustomType/' + id)





// post
export const postCustom = (data) => axios.post('http://localhost:4714/api/CustomType', data)