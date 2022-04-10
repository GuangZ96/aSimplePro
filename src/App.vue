<script lang='ts'>
import TabBar from '@/components/common/tabBar/TabBar.vue'
import {
  defineComponent,
} from 'vue'

export default defineComponent({
  components: {
    TabBar
  }
})
</script>

<template>
  <!-- <div id="nav">
    
  </div> -->
  <router-view/>
  <tab-bar></tab-bar>
</template>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>
