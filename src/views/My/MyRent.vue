<template>
	<div class="my-rent">
		<van-nav-bar title="我的出租" left-arrow @click-left="onClickLeft" />
		<ListCell
			v-for="(item, index) in rentList"
			:key="index"
			:item="item"
		></ListCell>
	</div>
</template>

<script>
import ListCell from "@/components/list.vue";
import { myRentAPI } from "@/api";
export default {
	name: "MyRent",
	components: { ListCell },
	data() {
		return {
			rentList: [],
		};
	},
	methods: {
		onClickLeft() {
			this.$router.back();
		},
		// 我的出租
		async getRentList() {
			this.$toast.loading({
				message: "请稍后...",
				overlay: true,
				forbidClick: true,
				duration: 0,
			});
			try {
				const { data } = await myRentAPI();
				console.log(data);
				this.rentList = data.body;
			} catch (error) {
				this.$toast.fail("获取房源列表失败！");
				console.log(error);
			} finally {
				this.$toast.clear();
			}
		},
	},
	mounted() {
		this.getRentList();
	},
};
</script>

<style scoped lang="less">
.my-rent {
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
