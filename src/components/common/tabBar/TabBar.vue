<script lang="ts">
import { 
    defineComponent,
    getCurrentInstance,
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
        let { ctx: _this }: any = getCurrentInstance()
        const state = reactive({
            active: 0, // 当前选中标签num
            tabbarArr: [
                { icon: 'home-o', path: '/', name: '首页', index: 0 },
                { icon: 'search', path: '/discover', name: '发现', index: 1 },
                { icon: 'setting-o', path: '/Me', name: '我的', index: 2 },
            ]
        })

        const onChange = (index: number) => {
            state.tabbarArr.forEach(element => {
                if (index === element.index) {
                    _this.$.appContext.config.globalProperties.$router.push(element.path)
                }
            });
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
        <van-tabbar-item v-for="item in tabbarArr"
            :key="item.index"
            :icon="item.icon"
        >
            {{ item.name }}
        </van-tabbar-item>
    </van-tabbar>
</template>

<style lang="less" scoped>

</style>