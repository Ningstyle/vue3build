import request from '@/request/index.js'
import {BASE_URL} from '@/config/index.js'
// 测试api
export const getMoneyHs = (data) => {
  return request({
    url: BASE_URL+'/business/getMoneyHs',
    method: 'get',
		dataType:'json',
    params: data,
  })
}