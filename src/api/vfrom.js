/*
 * @Author       : jiangronghua 613870505@qq.com
 * @Date         : 2023-09-05 08:12:19
 * @LastEditTime : 2023-09-05 08:13:43
 * @LastEditors  : jiangronghua
 * @Description  :
 */
import request from '@/utils/request'

export function getTemplateDetail(params) {
  return request({
    url: '/disease/getTemplateDetail',
    method: 'post',
    params
  })
}
