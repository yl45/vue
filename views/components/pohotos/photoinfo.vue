                    <template>
  <div class="info-container">
    <h2 class="title">{{photolist.title}}</h2>
    <p class="infolist">
      <span>发表时间：{{photolist.add_time|getformat("YYYY-MM-DD hh:mm:ss")}}</span>
      <span>点击次数：{{photolist.click}}</span>
    </p>
    <hr />
    <div>
      <vue-preview :slides="photoinfo"></vue-preview>
    </div>
    <div class="content" v-html="photolist.content"></div>
    <com :id="id"></com>
  </div>
</template>
                    <script>
import com from "../../components/subcomponent/comment.vue";
import {getinfo1,getphoto} from "../../index1"
export default {
  data() {
    return {
      id: this.$route.params.id,
      photolist: [],
      photoinfo: []
    };
  },
  created() {
    this.getinfo1();
    this.getphoto();
  },
  methods: {
    getinfo1() {
    //   this.$http.get("api/getimageInfo/" + this.id).then(res => {
    //     // console.log(res.body);
    //     if (res.body.status === 0) {
    //       this.photolist = res.body.message[0];
    //     }
    //   });
    getinfo1(this.id).then(res=>{
        this.photolist = res.message[0];
    })
    },
    getphoto() {
    //   this.$http.get("api/getthumimages/" + this.id).then(res => {
    //     console.log(res.body);
    //     this.photoinfo = res.body.message;
    //     this.photoinfo.forEach(item => {
    //       item.w = 600;
    //       item.h = 400;
    //       item.msrc = item.src;
    //     });
    //   });
    getphoto(this.id).then(res=>{
         this.photoinfo = res.message;
        this.photoinfo.forEach(item => {
          item.w = 600;
          item.h = 400;
          item.msrc = item.src;
        });
    })
    }
  },
  components: {
    com
  }
};
</script>
                    <style scoped>
.info-container {
  padding: 5px;
}
.title {
  text-align: center;
  color: skyblue;
  margin: 20px 0;
  font-size: 16px;
}
.infolist {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
}
.content {
  line-height: 30px;
  font-size: 13px;
}
.my-gallery {
  display: flex;
  flex-wrap: wrap;
}
figure {
  margin: 0 !important;
  margin: 5px 8px !important;
}
figure img {
  width: 90px;
}
</style>