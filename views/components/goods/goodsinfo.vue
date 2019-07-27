<template>
  <div class="goodsinfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-if="flag" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :data="data"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{list.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <span class="old">
              市场价：
              <del>{{list.market_price}}</del>
            </span>
            <span class="now_price">销售价：{{list.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numberbox @getcount="getcount" :maxnum="list.stock_quantity"></numberbox>
          </p>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addshopcar">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{list.goods_no}}</p>
          <p>库存情况：{{list.stock_quantity}}</p>
          <p>上架时间：{{list.add_time|getformat("YYYY-MM-DD hh:mm:ss")}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="godesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="gocomment(id)">图片评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getdetail, goodsinfo } from "../../index1.js";
import swiper from "../subcomponent/swiper.vue";
import numberbox from "../subcomponent/goodsinfo_number.vue";

export default {
  data() {
    return {
      data: "",
      id: this.$route.params.id,
      list: {},
      flag: false,
      countnum: 1
    };
  },
  created() {
    this.getdetail();
    this.goodsinfo();
  },
  methods: {
    addshopcar() {
      this.flag = !this.flag;
      var goodsinfo = {
        id: this.id,
        count: this.countnum,
        price: this.list.sell_price,
        select: true
      };
      this.$store.commit("addshop",goodsinfo)
    },
    getdetail() {
      getdetail(this.id).then(res => {
        console.log(res);
        res.message.forEach(item => {
          item.img = item.src;
        });
        this.data = res.message;
      });
    },
    goodsinfo() {
      goodsinfo(this.id).then(res => {
        console.log(this.$route);
        this.list = res.message[0];
      });
    },
    // addshop(){
    //     this.ballflag=!this.ballflag
    //     // console.log(1);

    // },
    godesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    gocomment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      const ballpoaition = this.$refs.ball.getBoundingClientRect();
      const shopcarposition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const leftpos = shopcarposition.left - ballpoaition.left;
      const toppos = shopcarposition.top - ballpoaition.top;

      el.offsetWidth;
      el.style.transform = `translate(${leftpos}px,${toppos}px)`;

      el.style.transition = "all .5s cubic-bezier(.4,-0.3,1,.68)";

      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    getcount(count) {
      this.countnum = count;
      console.log(this.countnum);
    }
  },
  components: {
    swiper,
    numberbox
  }
};
</script>
<style scoped>
.goodsinfo {
  background-color: #eee;
  overflow: hidden;
}

.now_price {
  font-size: 16px;
  color: red;
  margin-left: 10px !important;
}

/* .mui-card-content-inner img{
        width:80%!important;
    } */
.mui-card-footer {
  display: block;
}

.mui-card-footer button {
  margin: 10px 0;
}

.ball {
  width: 15px;
  height: 15px;
  position: absolute;
  left: 78px;
  top: 357px;
  z-index: 9999;
  background-color: red;
  border-radius: 50%;
}
</style>