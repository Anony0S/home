<template>
	<div class="layout-container">
		<router-view></router-view>

		<!-- 底部区域 S -->
		<van-tabbar route>
			<van-tabbar-item icon="home-o" to="/firstpage"> 首页 </van-tabbar-item>
			<van-tabbar-item icon="search" to="/searchhose"> 找房 </van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/consolt"> 咨询 </van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/my"> 我的 </van-tabbar-item>
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
	methods: {},
};
</script>

<style></style>
