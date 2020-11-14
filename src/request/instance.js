import axios from 'axios'
import { Message, Loading  } from 'element-ui'
const baseURL = 'http://192.168.8.147:9000'


const instance = axios.create({
  baseURL,
  timeout: 10000
})
let loadingInstance
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  token && (config.headers['token'] = token)
  loadingInstance = Loading.service()
  return config
}, err => Message.error('请求错误'))

instance.interceptors.response.use(res => {
  loadingInstance.close()
  return res.data
}, err => {
  loadingInstance.close()
  Message.error('网络错误')
})

export default instance