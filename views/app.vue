<template>
  <div class="box-container">
    <!-- header -->
    <!-- <mt-header fixed title="CMS" ></mt-header> -->
   <mt-header title="CMS">
  
    <mt-button icon="back" @click="go"  :slot="this.$route.path==='/home'?'':'left'" >返回</mt-button>

  <!-- <mt-button icon="more" slot="right"></mt-button> -->
</mt-header>
    <!-- content -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- bottom -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.countall}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
import mui from  "./lib/mui/dist/js/mui.js"
// import "./lib/mui/js/mui/min.js"
export default {
  mounted() {
    mui("header,nav").on("tap", "a", function() {
      mui.openWindow({ url: this.href });
    });
  },
  methods:{
    go(){
    this.$router.go(-1)
    
    }
  }
};
</script>
<style lang="css" scoped>
.box-container {
  /* padding-top: 40px; */
  overflow-x: hidden;
  padding-bottom: 50px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.6s linear;
}
.mint-header {
  z-index: 99;
}
.mui-bar{
  touch-action: none;
}
</style>