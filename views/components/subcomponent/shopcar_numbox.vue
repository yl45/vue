<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
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
    
    }
  },

  
};
</script>