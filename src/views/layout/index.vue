<template>
    <div class="layout-container">
        <router-view></router-view>

        <!-- 底部区域 S -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" @click="toFirstPage">首页</van-tabbar-item>
            <van-tabbar-item icon="search" @click="toSearchHose">找房</van-tabbar-item>
            <van-tabbar-item icon="friends-o" @click="toConsolt">咨询</van-tabbar-item>
            <van-tabbar-item icon="setting-o" @click="toMy">我的</van-tabbar-item>
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
	methods: {
		toFirstPage() {
			this.$router.push({
				name: "FirtPage",
			})
		},
		toSearchHose() {
			this.$router.push({
				name: "SearchHose",
			})
		},
		toConsolt() {
			this.$router.push({
				name: "Consolt",
			})
		},
		toMy() {
			this.$router.push({
				name: "My",
			})
		}
	}
};
</script>

<style>
</style>