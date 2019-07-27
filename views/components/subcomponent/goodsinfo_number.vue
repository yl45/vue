<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" >
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" ref="btn" value="1" @change="getcount" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/dist/js/mui.js";
export default {
  mounted() {
  mui(".mui-numbox").numbox()
  },
  methods: {
    getcount() {
      this.$emit("getcount", parseInt(this.$refs.btn.value));
    }
  },
  props: ["maxnum"],
  watch: {
    maxnum(newVal, oldVal) {
        console.log(newVal);
        
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>