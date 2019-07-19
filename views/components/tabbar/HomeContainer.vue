<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in data" :key="item.img">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="../../img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
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
export default {
  data() {
    return {
      data: ""
    };
  },
  methods: {
    getSwiper() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(res => {
          console.log(res.body);
          if (res.body.status == 0) {
            this.data = res.body.message;
          } else {
            Toast("获取数据错误");
          }
        });
    }
  },
  created() {
    this.getSwiper();
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
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
</style>
