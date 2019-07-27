import Vue from "vue"
import router from "./router.js"
import app from "./app.vue"

import VueRouter from "vue-router";
Vue.use(VueRouter);
import VueResource from "vue-resource"
Vue.use(VueResource)
import axios from "axios"
Vue.prototype.axios=axios
import Vuex from "vuex"
Vue.use(Vuex)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.http.options.root = "http://www.liulongbin.top:3005/"
Vue.http.options.emulateJSON=true
axios.defaults.baseURL="http://www.liulongbin.top:3005"

// import { Header, Swipe, SwipeItem,Button,Lazyload  } from "mint-ui"

// Vue.use(Lazyload);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button);
import Mintui from "mint-ui"
Vue.use(Mintui)
import "mint-ui/lib/style.css"



import "./lib/mui/dist/js/mui.js"
import "./lib/mui/dist/css/mui.css"
import "./lib/mui/dist/css/icons-extra(1).css"
import moment from "moment";
var car=JSON.parse(localStorage.getItem("car")||'[]')
var store=new Vuex.Store({
    state:{
        car:car,
    },
    mutations:{
        addshop(state,goodsinfo){
            var flag=false;
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count+=parseInt(goodsinfo.count);
                    flag=true;
                    return true;
                }
            })
            !flag&&state.car.push(goodsinfo)
            // console.log(state.car);
            localStorage.setItem("car",JSON.stringify(state.car))
            
        }
    },
    getters:{
        countall(state){
            var sum=0;
            state.car.forEach(item=>{
                sum+=item.count
            })
            return sum
        }
    }
})
Vue.filter("getformat", (datastr, parrent) => {
    return moment(datastr).format(parrent)
})

let vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
    store

})


