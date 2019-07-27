<template>
    <div>
       <combox :id="this.$route.params.id"></combox>
    </div>
</template>
<script>
import combox from "../subcomponent/comment.vue"
export default {
components:{
    combox
}
}
</script>