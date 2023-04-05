// 导入封装 axios 对象
import request from '@/utils/request.js'

/**
 * 登录 API
 * @param {*} username
 * @param {*} password
 * @returns
 */
export const loginAPI = async (username, password) => {
  return request.post('/apis/teacher/login', { username, password })
}
