<template>
	<div class="city">
		<!-- 导航栏 S -->
		<van-nav-bar
			class="city-nav"
			title="城市列表"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
			fixed
			z-index="2"
		/>
		<!-- 导航栏 E -->

		<!-- 内容区域 S -->
		<van-index-bar
			class="city-body"
			:sticky-offset-top="45"
			:index-list="indexList"
			highlight-color="#21b97a"
		>
			<van-index-anchor index="当前城市"></van-index-anchor>
			<van-cell :title="currentCity" />

			<van-index-anchor index="热门城市"></van-index-anchor>
			<van-cell
				:title="item.label"
				v-for="item in hotCityList"
				:key="item.label"
				@click="selectCity(item.label)"
			>
			</van-cell>

			<div v-for="val in newIndexList" :key="val">
				<van-index-anchor :index="val"></van-index-anchor>
				<van-cell
					:title="item"
					v-for="(item, index) in cityList[val]"
					:key="index"
					@click="selectCity(item)"
				/>
			</div>
		</van-index-bar>
		<!-- 内容区域 E -->
	</div>
</template>

<script>
import { cityListAPI, hotCityListAPI } from "@/api";
export default {
	name: "City",
	data() {
		return {
			cityList: {},
			hotCityList: [],
			indexList: ["#", "热"],
			// 当前城市
			currentCity: "北京",
		};
	},
	methods: {
		// 获取城市列表
		async getCityList() {
			try {
				const res = await cityListAPI(1);
				// 整理城市列表数据
				const newObj = {};
				res.data.body.forEach((ele) => {
					const letter = ele.short[0].toUpperCase();
					if (!newObj[letter]) {
						newObj[letter] = [];
						newObj[letter].push(ele.label);
					} else {
						newObj[letter].push(ele.label);
					}
				});
				// console.log(newObj);
				this.cityList = newObj;
				// 整理索引列表数据
				this.indexList = this.indexList.concat(
					Object.keys(this.cityList).sort()
				);
			} catch (error) {
				console.log("获取城市列表失败！\n", error);
			}
		},
		// 获取热门城市列表
		async getHotCityList() {
			try {
				const res = await hotCityListAPI();
				this.hotCityList = res.data.body;
			} catch (error) {
				console.log("获取热门城市列表失败！", error);
			}
		},
		// 返回按钮
		onClickLeft() {
			this.$router.push({
				name: "FirstPage",
				// TODO: 传参 （顺便复习一下）
				params: {
					currentCity: this.currentCity,
				},
			});
		},
		// 选择城市
		selectCity(val) {
			this.currentCity = val;
			// TODO: 携带参数跳转页面
			this.$router.push({
				name: "FirstPage",
				params: {
					currentCity: this.currentCity,
				},
			});
		},
	},
	computed: {
		newIndexList() {
			return this.indexList.slice(2);
		},
	},
	mounted() {
		this.getCityList();
		this.getHotCityList();
	},
};
</script>

<style lang="less">
.city {
	.city-nav {
		.van-nav-bar__content {
			background-color: #21b97a;
			.van-nav-bar__text {
				color: #fff;
			}
			.van-icon {
				color: #fff;
			}
		}
	}
	.city-body {
		padding-top: 46px;
	}
}
</style>
