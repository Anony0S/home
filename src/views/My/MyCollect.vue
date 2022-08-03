<template>
	<div class="my-collect">
		<van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
		<ListCell
			v-for="(item, index) in collectList"
			:key="index"
			:item="item"
		></ListCell>
	</div>
</template>

<script>
import ListCell from "@/components/list.vue";
import { myCollectAPI } from "@/api";
export default {
	name: "MyCollect",
	components: { ListCell },
	data() {
		return {
			collectList: [],
		};
	},
	methods: {
		onClickLeft() {
			this.$router.back();
		},
		// 我的收藏
		async getMyCollect() {
			try {
				const { data } = await myCollectAPI();
				// console.log(data);
				this.collectList = data.body;
			} catch (error) {
				this.$toast.fail("获取收藏列表失败！");
				console.log(error);
			}
		},
	},
	mounted() {
		this.getMyCollect();
	},
};
</script>

<style scoped lang="less">
.my-collect {
	/deep/.van-nav-bar {
		background-color: #21b97a;
		.van-icon {
			color: #fff;
		}
		.van-nav-bar__title {
			color: #fff;
		}
	}
}
</style>
