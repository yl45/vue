<template>
  <div>
    <!-- 轮播图 -->
   <swiper :data="data"></swiper>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/Newlist">
         <img src="../../img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
            <img src="../../img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
           <img src="../../img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../img/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../img/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../img/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    
     
    </ul>
  
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import {getSwiper} from "../../index1"
import swiper from "../subcomponent/swiper.vue"
export default {
  data() {
    return {
      data: ""
    };
  },
  methods: {
    getSwiper() {
    //   this.$http
    //     .get("api/getlunbo")
    //     .then(res => {
    //       // console.log(res.body);
    //       if (res.body.status == 0) {
    //         this.data = res.body.message;
    //       } else {
    //         Toast("获取数据错误");
    //       }
    //     });
    // }
    getSwiper().then(res=>{
       this.data = res.message;
    })
  },
  },
  components:{
    swiper
  },
  created() {
    this.getSwiper();
  }
};
</script>
<style scoped>

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
   
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border:none;
}
.mui-grid-view.mui-grid-9 img  {
 width: 60px;
 height: 60px;
} 
.mui-media-body {
  font-size: 13px!important;
}
</style>
