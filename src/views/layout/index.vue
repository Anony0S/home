<template>
    <div class="layout-container">
        <router-view></router-view>

        <!-- 底部区域 S -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">找房</van-tabbar-item>
            <van-tabbar-item icon="friends-o">咨询</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
        <!-- 底部区域 E -->
    </div>
</template>

<script>
export default {
    name: "Layout",
    data() {
        return {
            active: 0,
        };
    },
};
</script>

<style>
</style>