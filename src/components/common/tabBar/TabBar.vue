<script lang="ts">
import { 
    defineComponent,
    reactive,
    toRefs, 
} from 'vue'

import { Tabbar, TabbarItem } from 'vant'

export default defineComponent({
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    setup() {
        const state = reactive({
            active: 0, // 当前选中标签num
            // tabbarArr: []
        })

        const onChange = (index: number) => {
            console.log("index------>", index)
        }

        return {
            ...toRefs(state),

            onChange,
        }
    },
})
</script>

<template>
    <van-tabbar 
        v-model="active"
        @change='onChange'
    >
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search" dot>发现</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">我的</van-tabbar-item>
    </van-tabbar>
</template>

<style lang="less" scoped>

</style>