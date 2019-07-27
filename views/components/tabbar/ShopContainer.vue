<template>
  <div class="goods">
    <div class="goods-list">
      <div class="mui-card" v-for="item in shoplist" :key="item.id">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >
          <mt-switch ></mt-switch>
          <img :src="item.thumb_path" >
          <div class="title">
              <h1>{{item.title}}</h1>
             <div class="num">
                  <span class="price">￥{{item.sell_price}}</span>
                <shopcar></shopcar>
                <a href="javascript:;">删除</a>
             </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
  </div>
</template>
<script>
import shopcar from "../subcomponent/shopcar_numbox.vue"
import {getshoplist} from "../../index1.js"
export default {
    components:{
        shopcar
    },
    data(){
        return {
            shoplist:[]
        }
    },
    created(){
        this.getshoplist();
    },
    methods:{
        getshoplist(){
            var idarr=[];
            this.$store.state.car.forEach(item=>{
                idarr.push(item.id)
            });
            if(idarr.length<=0){
                return
            }
            getshoplist(idarr.join(",")).then(res=>{
               
                this.shoplist=res.message
                 console.log(this.shoplist);
            })
        }
    }

}
</script>
<style scoped>
    .mui-card-content-inner {
        display: flex;
    }
    .mui-card-content-inner img {
        width: 60px;
        height: 60px;
       
    }
    .num {
        display: flex;
        justify-content: space-between;
        align-items:center
    }
    .title h1 {
        font-size: 13px;
        color:#000;
        margin-bottom: 10px;
    }
    .goods {
        background-color: #eee;
        overflow: hidden;
    }
    .price {
        color:red;
    }
   
</style>