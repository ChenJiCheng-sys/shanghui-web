import axios from 'axios'
import { Message } from 'element-ui'
const baseURL = 'http://192.168.8.147:9000'

const instance = axios.create({
  baseURL,
  timeout: 1500
})

instance.interceptors.request.use(config => {
  return config
}, err => Promise.reject(err))

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  Message.error('网络超时')
})

export default instance