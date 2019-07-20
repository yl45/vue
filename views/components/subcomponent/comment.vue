<template>
    <div class="infocomment">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入要评论的内容" class="com" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="add">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comment" :key="i">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp&nbsp用户：{{item.user_name}}&nbsp&nbsp发表时间：{{item.add_time|getformat("YYYY-MM-DD hh:mm:ss")}}
                </div>
                <div class="cmt-body">
                    {{item.content==="undefined"?"很懒":item.content}}
                </div>
            </div>

        </div>
        <mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
    </div>



</template>
<script>
    import { Toast } from "mint-ui"
    export default {
        data() {
            return {
                comment: [],
                pageindex: 1,
                msg:""
            }
        },
        props: ["id"],
        created() {
            this.getcomment();
        },
        methods: {
            getcomment() {
                this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex).then(res => {
                    console.log(res.body);
                    if (res.body.status === 0) {
                        this.comment = this.comment.concat(res.body.message)
                    } else {
                        Toast("数据请求错误")
                    }
                })
            },
            more() {
                this.pageindex++;
              this.getcomment();
            },
            add(){
                if(this.msg.trim()===""){
                    return Toast("不能为空")
                }
                this.$http.post("api/postcomment/"+this.$route.params.id,{content:this.msg})
                .then(res=>{
                    console.log(res.body);
                    
                   if(res.body.status===0){
                       let info={
                           user_name:"匿名用户",
                           add_time:Date.now(),
                           content:this.msg
                       }
                       this.comment.unshift(info)
                       
                       this.msg=""
                   }else{
                       Toast("请求失败")
                   }
                    
                })
            }
        }
    }
</script>
<style>
    .cmt-title {
        background-color: #ccc;
        line-height: 30px;
        font-size: 13px;
    }

    .cmt-body {
        font-size: 13px;
        line-height: 35px;
        text-indent: 2em;
    }

    .cmt-list {
        margin-top: 5px;
    }

    .com {
        margin: 0;
        height: 100px;
        font-size: 15px;
    }

    .infocomment h2 {
        font-size: 20px;
    }
</style>