<template>
	<div class="detalis">
		<van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="'http://liufusong.top:8080' + image" />
			</van-swipe-item>
		</van-swipe>
		<!-- 上半部分 -->
		<div class="detalis-top">
			<h4 class="title van-ellipsis">{{ houseInfo.title }}</h4>
			<div class="details-tag">
				<van-tag
					plain
					type="primary"
					size="medium"
					v-for="(item, index) in houseInfo.tags"
					:key="index"
				>
					{{ item }}
				</van-tag>
			</div>
			<van-grid :border="false" :column-num="3" class="detalis-info">
				<van-grid-item>
					<h3>{{ houseInfo.price }}<i>/月</i></h3>
					<span>租金</span>
				</van-grid-item>
				<van-grid-item>
					<h3>{{ houseInfo.roomType }}</h3>
					<span>房型</span>
				</van-grid-item>
				<van-grid-item>
					<h3>{{ houseInfo.size }}平米</h3>
					<span>面积</span>
				</van-grid-item>
			</van-grid>
			<van-grid :border="false" :column-num="2" class="detalis-msg">
				<van-grid-item>
					<span>装修：<i>精美</i></span>
				</van-grid-item>
				<van-grid-item>
					<span>
						朝向：
						<i>{{ "暂无" }}</i>
					</span>
				</van-grid-item>
				<van-grid-item>
					<span>楼层：<i>低楼层</i></span>
				</van-grid-item>
				<van-grid-item>
					<span>类型：<i>普通住宅</i></span>
				</van-grid-item>
			</van-grid>
		</div>

		<!-- 地图模块 -->
		<div class="detalis-map">
			<div class="title-common">
				<h4>小区：{{ houseInfo.community }}</h4>
			</div>
			<div class="content"></div>
		</div>

		<!-- 房屋配套 -->
		<div class="house-supporting">
			<div class="title-common">
				<h4>房屋配套</h4>
			</div>
			<van-grid :border="false">
				<van-grid-item
					:text="item"
					v-for="(item, index) in houseInfo.supporting"
					:key="index"
				>
					<div slot="icon" :class="supportIcon[item]"></div>
				</van-grid-item>
			</van-grid>
		</div>

		<!-- 房屋概况 -->
		<div class="house-general">
			<div class="title-common">
				<h4>房源概况</h4>
			</div>
			<div class="my-info">
				<div class="left">
					<img src="@/assets/imgs/avatar.png" alt="" />
					<div class="name">
						<span>王女士</span>
						<span>
							<i class="iconfont icon-auth"></i>
							已认证房主
						</span>
					</div>
				</div>
				<button>发消息</button>
			</div>
			<div class="my-text">
				<p v-html="textForm(houseInfo.description, '【')"></p>
			</div>
		</div>
	</div>
</template>

<script>
import { getHouseDetailsAPI } from "@/api";
export default {
	name: "Detalis",
	data() {
		return {
			images: [],
			houseInfo: {},
			// 房屋配套图标
			supportIcon: {
				电视: "iconfont icon-identity",
				冰箱: "iconfont icon-ref",
				洗衣机: "iconfont icon-wash",
				空调: "iconfont icon-air",
				热水器: "iconfont icon-heater",
				沙发: "iconfont icon-sofa",
				暖气: "iconfont icon-Heat",
				宽带: "iconfont icon-broadband",
				衣柜: "iconfont icon-wardrobe",
				天然气: "iconfont icon-gas",
			},
		};
	},
	methods: {
		onClickLeft() {
			this.$router.back();
		},
		// 获取房屋具体信息
		async getHouseDetails(id) {
			this.$toast.loading({
				message: "请稍后...",
				overlay: true,
				forbidClick: true,
				duration: 0,
			});
			try {
				const { data } = await getHouseDetailsAPI(id);
				console.log(data.body);
				this.images = data.body.houseImg;
				this.houseInfo = data.body;
			} catch (error) {
				this.$toast.fail("获取房屋详情失败！");
				console.log(error);
			} finally {
				this.$toast.clear();
			}
		},
		// 格式化文本内容
		textForm(text, word) {
			const newLine = `<br>${word}`;
			const reg = new RegExp(word, "gi");
			text = text.toString() || "";
			return text.replace(reg, newLine);
		},
	},
	mounted() {
		const houseCode = this.$route.params.houseCode;
		this.getHouseDetails("5cc4494549926d0e2b94c816");
		this.getHouseDetails(houseCode);
	},
};
</script>

<style scoped lang="less">
.detalis {
	background-color: #f6f5f6;
	.my-swipe .van-swipe-item {
		height: 252px;
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
		img {
			width: 100%;
			height: 252px;
		}
	}
	.detalis-top {
		padding: 0 10px;
		background-color: #fff;
		margin-bottom: 15px;
		// 标题
		.title {
			padding-top: 20px;
		}
		// 标签
		.details-tag {
			margin-top: 15px;
			.van-tag {
				margin-right: 5px;
			}
		}
		// 信息
		.detalis-info {
			color: red;
			margin-top: 15px;
			border-top: 1px solid rgb(201, 201, 201);
			border-bottom: 1px solid rgb(201, 201, 201);
			i {
				color: #fa5741;
				font-size: 14px;
				font-weight: 400;
			}
			span {
				color: #999;
				font-size: 14px;
				margin-top: 8px;
			}
		}
		// 信息2
		.detalis-msg {
			font-size: 13px;
			span {
				color: #999;
				i {
					color: #333;
				}
			}
		}
	}

	// 地图
	.detalis-map {
		background-color: #fff;
		margin-bottom: 15px;
		padding: 0 10px;
		border-radius: 7px;
		.content {
			min-height: 145px;
			background-color: #fff;
		}
	}

	// 房屋配套
	.house-supporting {
		background-color: #fff;
		margin-bottom: 15px;
		padding: 0 10px;
		border-radius: 7px;
	}

	// 房屋概况
	.house-general {
		background-color: #fff;
		padding: 0 10px;
		border-radius: 7px;
		.my-info {
			min-height: 90px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				display: flex;
				img {
					width: 60px;
					height: 60px;
					margin-right: 15px;
				}
				.name {
					display: flex;
					flex-direction: column;
					justify-content: center;
					span:nth-child(2) {
						color: #fa5741;
						font-size: 12px;
						margin-top: 5px;
						.icon-auth {
							font-size: 14px;
						}
					}
				}
			}
		}
		button {
			width: 75px;
			height: 30px;
			border-radius: 10px;
			font-size: 14px;
			background-color: #fff;
			color: #33be85;
			border: 1px solid #33be85;
		}
		.my-text {
			padding: 0 10px;
		}
	}

	// 公共标题
	.title-common {
		background-color: #fff;
		padding: 0 0 10px;
		h4 {
			border-bottom: 1px solid rgb(201, 201, 201);
			padding: 10px;
		}
	}
}
</style>
