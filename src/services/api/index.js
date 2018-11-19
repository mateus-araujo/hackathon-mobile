import axios from 'axios'

let baseURL = ''

baseURL = 'http://10.114.254.100:3333'

console.log('Environment: ' + process.env.NODE_ENV)

const api = axios.create({
  baseURL
})

export default api
