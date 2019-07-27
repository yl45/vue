<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in data" :key="item.img">
                <img :src="item.img" alt />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        props:["data"]
    }
</script>
<style scoped>
    .mint-swipe {
        height: 130px;
        text-align: center;
    }

    .mint-swipe img {
        width: 100%;
        height: 100%;
    }
</style>