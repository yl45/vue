<template>
  <div>
    <!-- 图文列表 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            @click="getlists(item.id)"
            :class="['mui-control-item',item.id===0?'mui-active':'']"
            v-for="item in cares"
            :key="item.id"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片分类 -->
    <ul class="photo">
      <router-link
        v-for="item in list"
        :key="item.id"
        class="photolist"
        tag="li"
        :to="'/home/photoinfo/'+item.id"
      >
        <img v-lazy="item.img_url" />
        <div class="info">
          <h2>{{item.title}}</h2>
          <div class="info-conn">{{item.content}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/dist/js/mui.js";
import { getcates, getlists } from "../../index1";
export default {
  data() {
    return {
      cares: [],
      list: []
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getcates();
    this.getlists(0);
  },
  methods: {
    getcates() {
      // this.$http.get("api/getimgcategory").then(res => {
      //   if (res.body.status === 0) {
      //     res.body.message.unshift({ title: "全部", id: 0 });
      //     this.cares = res.body.message;
      //   }
      //   // console.log(res.body);
      // });
      getcates().then(res => {
        res.message.unshift({ title: "全部", id: 0 });
        this.cares = res.message;
      });
    },
    getlists(cateid) {
      // this.$http.get("api/getimages/"+cateid).then(res=>{
      //   // console.log(res.body);
      //   if(res.body.status===0){
      //     this.list=res.body.message
      //   }

      // })
      
      
      getlists(cateid).then(res=>{
        this.list=res.message
      })
    }
  }
};
</script>
<style scoped>
* {
  touch-action: pan-y;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo {
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 0 10px;
  padding-bottom: 0;
}
.photolist {
  background-color: #ccc;
  text-align: center;
  margin-bottom: 5px;
  position: relative;
}
.photolist img {
  width: 100%;
  vertical-align: middle;
}
.info {
  color: #fff;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  max-height: 84px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}
.info h2 {
  color: #fff;
  margin: 0;
  font-size: 16px;
  margin-bottom: 8px;
}
</style>