<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
                <router-link :to="'/home/Newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h2>{{item.title}}</h2>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{item.add_time|getformat("YYYY-MM-DD hh:mm:ss")}}</span>
                            <span>点击次数：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
   import {getnewlist} from "../../index1"
    export default {
        data(){
            return {
                newlist:"",
            }
        },
        created(){
            this.getnewlist();
        },
        methods:{
            getnewlist(){
                // this.$http.get("api/getnewslist").then(res=>{
                //    if(res.data.status==0){
                //        console.log(res.data.message);
                       
                //        this.newlist=res.data.message
                      
                       
                //    }else{
                //        Toast("请求数据错误")
                //    }
                    
                // })
                getnewlist().then(res=>{
                     this.newlist=res.message
                })
            }
        }
    }
</script>
<style scoped>
    .mui-media-body h2{
        font-size: 14px;
    }
    .mui-media-body span {
        font-size: 12px;
        color:skyblue
    }
    .mui-ellipsis {
        display: flex;
        justify-content: space-between;
    }
</style>