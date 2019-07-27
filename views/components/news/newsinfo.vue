                                    <template>
  <div class="newinfo-container">
    <h2 class="title">{{newsinfo.title}}</h2>
    <p>
      <span>发表时间：{{newsinfo.add_time|getformat("YYYY-MM-DD hh:mm:ss")}}</span>
      <span>点击次数：{{newsinfo.click}}</span>
    </p>
    <hr />
    <div class="content" v-html="newsinfo.content"></div>
    <comments :id="id"></comments>
  </div>
</template>
        <script>
import { Toast } from "mint-ui";
import {getinfo} from "../../index1"
import comments from "../subcomponent/comment.vue";
export default {
  data() {
    return {
      newsinfo: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
      getinfo() {
    //   this.$http.get("api/getnew/" + this.id).then(res => {
    //     if (res.data.status == 0) {
    //       this.newsinfo = res.data.message[0];
    //       console.log(this.newsinfo);
    //     } else {
    //       Toast("数据查询错误");
    //     }
    //   })
    //   let { message } = await getinfo(this.id);
    //   this.newsinfo = message[0];
     
      
      getinfo(this.id).then(res=>{
            this.newsinfo=res.message[0];
            // console.log(1);
            
      })
      // }
    },
   
  },
   components: {
      comments
    }
};
</script>
        <style scoped>
.newinfo-container {
  padding: 0 4px;
}
.title {
  font-size: 16px;
  color: red;
  text-align: center;
  margin: 20px 0;
}
.newinfo-container p {
  /* color: skyblue; */
  display: flex;
  justify-content: space-between;
}
.newinfo-container p span {
  color: skyblue;
}
</style>