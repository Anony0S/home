<template>
	<div class="list-cell" @click="toDetails(item.houseCode)">
		<van-cell>
			<div class="left" slot="icon">
				<img :src="'http://liufusong.top:8080' + item.houseImg" />
			</div>
			<div class="right" slot="default">
				<h3 class="van-ellipsis">{{ item.title }}</h3>
				<p class="text">{{ item.desc }}</p>
				<div class="span">
					<van-tag
						type="primary"
						v-for="(tag, index) in item.tags"
						:key="index"
						>{{ tag }}</van-tag
					>
				</div>
				<div class="price">
					<i>
						<span>{{ item.price }}</span> 元/月
					</i>
				</div>
			</div>
		</van-cell>
	</div>
</template>

<script>
export default {
	name: "ListCell",
	props: ["item"],
	methods: {
		toDetails(houseCode) {
			// 去往详情页
			this.$router.push({
				name: "Detalis",
				params: {
					houseCode,
				},
			});
		},
	},
};
</script>

<style scoped lang="less">
.list-cell {
	border-bottom: 1px solid rgba(176, 176, 176, 0.5);
	margin: 15px;
	.van-cell {
		align-items: center;
		.left {
			// display: flex;
			// justify-content: center;
			// align-items: center;
			width: 160px;
			height: 80px;
			margin-right: 10px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.right {
			.text {
				font-size: 12px;
				color: #afb2b3;
			}
			.price {
				font-size: 12px;
				color: #fa5741;
				span {
					font-size: 16px;
					font-weight: 700;
				}
			}
		}
	}
}
</style>
