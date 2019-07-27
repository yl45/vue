import axios from "axios";
import { Toast, Indicator } from "mint-ui"
// const loading = Indicator.$create({
//     txt: "请稍后",
//     type: "loading",
//     mask: true,
//     zIndex: 999,
// })
var request = axios.create({
    baseURL: "http://www.liulongbin.top:3005",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // form
        // 'Content-Type': 'application/json' // json
    }
})
request.interceptors.request.use(config => {
    // loading.show();
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
    return config;
},
    err => {
        // loading.hide();
        open.close();
        Toast("前端报错")
        return Promise.reject(err)
    }
)
request.interceptors.response.use(res => {
    // loading.show();
    Indicator.close();
    Toast("响应成功");
    if (res.data.status === 0) { return res.data }
    if (res.data.status !== 0) { return Promise.reject(res) }

},
    err => {
        // loading.hide();
        Indicator.close();
        Toast('服务器错误')
        return Promise.reject(err)
    }
)
export default request