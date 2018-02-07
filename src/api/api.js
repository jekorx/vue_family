import axios from 'axios'
import qs from 'qs'

/**** config start ****/
// 如果`url`不是绝对地址，那么`baseURL`将会加到`url`的前面
// 当`url`是相对地址的时候，设置`baseURL`会非常的方便
axios.defaults.baseURL = 'http://127.0.0.1:8080/'
// `withCredentails`选项表明了是否是跨域请求
axios.defaults.withCredentials = true
/*
  `transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动
  该选项只适用于以下请求方式：`put/post/patch`
  数组里面的最后一个函数必须返回一个字符串、-一个`ArrayBuffer`或者`Stream`
*/
axios.defaults.transformRequest = [
  params => {
    // qs转换post的data，处理后台接收不到参数的问题
    return qs.stringify(params)
  }
]
/**** config end ****/

/**** 相关请求，start ****/
/*
  非简单请求是那种对服务器有特殊要求的请求，
    比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json
  非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）
*/
export const axiosGet = (data, callback) => {
  axios
    .get('app/v1/article/1/20')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}
export const axiosPost = (data, callback) => {
  axios
    .post('app/v1/article', {
      title: 'axios',
      uid: 1,
      label: '666',
      content: 'axiosaxiosaxiosaxiosaxios'
    })
    .then(res => {
      if (callback)
        callback(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}
export const axiosDelete = (data, callback) => {
  axios
    .delete('app/v1/article/' + data)
    .then(res => {
      if (callback)
        callback(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}
/**** 相关请求，end ****/
