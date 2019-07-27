// import Vue from "vue";
import VueRouter from "vue-router";
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import ShopContainer from "./components/tabbar/ShopContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import Newlist from "./components/news/Newlist.vue"
import Newsinfo from "./components/news/newsinfo.vue"
import photoList from "./components/pohotos/photolist.vue"
import photoInfo from "./components/pohotos/photoinfo.vue"
import goodslist from "./components/goods/goodslist.vue"
import goodsinfo from "./components/goods/goodsinfo.vue"
import goodsdesc from "./components/goods/goodsdesc.vue"
import goodscomment from "./components/goods/goodscomment.vue"
let router = new VueRouter({
    routes: [
        {path:"/",redirect:"/home "},
       {path:"/home",component:HomeContainer},
       {path:"/member",component:MemberContainer},
       {path:"/shopcar",component:ShopContainer},
       {path:"/search",component:SearchContainer},
       {path:"/home/Newlist",component:Newlist},
       {path:"/home/Newsinfo/:id",component:Newsinfo},
       {path:"/home/photolist",component:photoList},
       {path:"/home/photoinfo/:id",component:photoInfo},
       {path:"/home/goodslist",component:goodslist},
       {path:"/home/goodsinfo/:id",component:goodsinfo,name:"goodsinfo"},
       {path:"/home/goodsdesc/:id",component:goodsdesc,name:"goodsdesc"},
       {path:"/home/goodscomment/:id",component:goodscomment,name:"goodscomment"},
       
    ],
    linkActiveClass:"mui-active",
})
export default router