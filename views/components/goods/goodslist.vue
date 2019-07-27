<template>
  <div class="goodslist">
    <div class="good-item" v-for="(item,i) in goodslist" :key="i" @click="detail(item.id)">
      <img :src="item.img_url" alt />
      <h2>{{item.title}}</h2>
      <div class="detail">
        <p class="price">
          <span class="now">{{item.sell_price}}</span>
          <span class="old">
            <del>{{item.market_price}}</del>
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="add">加载更多</mt-button>
  </div>
</template>
<script>
import { getdoods } from "../../index1";

export default {
  data() {
    return {
      pageindex: 1,
      goodslist: []
    };
  },
  created() {
    this.getdoods();
  },
  methods: {
     
    getdoods() {
      getdoods(this.pageindex).then(res => {
        // if (res.message==[]) {
          
        // }
        //  console.log(res.message,this.pageindex);
         
        this.goodslist=this.goodslist.concat(res.message)
       
        
      });
    },
    add(){
      this.pageindex++;
      this.getdoods();
    },
    detail(id){
      this.$router.push({name:"goodsinfo",params:{id}})
    }
    
  },
 
};
</script>
<style scoped>
.goodslist {
  padding: 5px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.good-item {
  width: 49%;
  box-shadow: 2px 2px 2px rgba(1, 1, 1, 0.2);
  border: 1px solid #ccc;
  padding: 2px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: space-between;
}

.good-item img {
  width: 100%;
}

.good-item h2 {
  font-size: 14px;
}

.detail {
  background-color: rgba(0, 0, 0, 0.1);
  padding-bottom: 5px;
}

.sell {
  margin: 0;
  display: flex;
  justify-content: space-between;
}

.now {
  color: red;
  font-size: 20px;
  margin-right: 8px;
}
</style>