import Vue from "vue"
import router from "./router.js"
import app from "./app.vue"

import VueRouter from "vue-router";
Vue.use(VueRouter);
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root = "http://www.liulongbin.top:3005/"
Vue.http.options.emulateJSON=true
import { Header, Swipe, SwipeItem,Button } from "mint-ui"

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header)
Vue.component(Button.name, Button);



import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"
import moment from "moment";
Vue.filter("getformat", (datastr, parrent) => {
    return moment(datastr).format(parrent)
})

let vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})


