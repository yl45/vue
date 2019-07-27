<template>
    <div class="goodsinfo-container">
        <h2> {{info.title}}</h2>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>
<script>
    import {getgoodsdesc} from "../../index1.js"
    export default {
        data(){
            return {
                id:this.$route.params.id,
                info:{},
            }
        },
        created() {
            this.getgoodsdesc();
        },
        methods:{
            getgoodsdesc(){
                getgoodsdesc(this.id).then(res=>{
                    console.log(res.message[0]);
                    this.info=res.message[0];
                })
            }
        }
    }
</script>
<style scoped>
.goodsinfo-container h2 {
    color:skyblue;
    font-size: 20px;
    text-align: center;
    
}
.goodsinfo-container img {
    width: 100%;
    vertical-align: middle;
}
.goodsinfo-container [align="center"] {
    margin: 0
}
</style>