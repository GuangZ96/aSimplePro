<script lang="ts">
import { 
    defineComponent,
    reactive,
    toRefs, 
} from 'vue'
import { Button, PullRefresh, Toast } from 'vant';

export default defineComponent({
    components: {
        [Button.name]: Button,
        [PullRefresh.name]: PullRefresh,
        [Toast.name]: Toast,
    },
    setup() {
        const state = reactive({
            count: 0, // 刷新次数
            loading: false,
        })

        const onRefresh = () => {
            setTimeout(() => {
                Toast('刷新成功')
                state.loading = false,
                state.count++;
            }, 3000)
        }

        return {
            ...toRefs(state),

            onRefresh,
        }
    },
})
</script>

<template>
    <div class="wrapper">
        <!-- 下拉刷新区域 -->
        <van-pull-refresh
            v-model="loading"
            @refresh="onRefresh"
        >
            <p>刷新次数: {{ count }}</p>
        </van-pull-refresh>
    </div>
</template>

<style lang="less" scoped>
    .wrapper {
        height: calc(100vh - 50px); /*no*/
        .van-pull-refresh {
            height: 100%;
        }
    }
</style>