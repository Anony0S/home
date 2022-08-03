<template>
	<div class="my-container">
		<div class="login-top">
			<div class="avator">
				<img
					:src="'http://liufusong.top:8080' + userInfo.avatar"
					v-if="userInfo"
				/>
				<img src="@/assets/imgs/avatar.png" v-else />
			</div>
			<div class="info">
				<span>{{ userInfo ? userInfo.nickname : "游客" }}</span>
				<button class="to-login" @click="toLogin" v-if="!user">去登陆</button>
				<template v-else>
					<button class="to-login" @click="toExit">退出</button>
					<div class="editInfo" @click="editInfo">编辑个人资料</div>
				</template>
			</div>
		</div>
		<van-grid :column-num="3" :border="false" class="login-nav" clickable>
			<van-grid-item
				v-for="(value, index) in nav"
				:key="index"
				@click="$router.push({ name: value.to })"
			>
				<i slot="icon" :class="'iconfont ' + value.icon"></i>
				<span slot="text">{{ value.title }}</span>
			</van-grid-item>
		</van-grid>
		<img src="@/assets/imgs/join.png" class="join" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import { getUserInfoAPI } from "@/api";
export default {
	name: "My",
	data() {
		return {
			nav: [
				{
					icon: "icon-coll",
					title: "我的收藏",
					to: "MyCollect",
				},
				{
					icon: "icon-ind",
					title: "我的出租",
					to: "/my/collect",
				},
				{
					icon: "icon-record",
					title: "看房记录",
					to: "/my/collect",
				},
				{
					icon: "icon-identity",
					title: "成为房主",
					to: "/my/collect",
				},
				{
					icon: "icon-myinfo",
					title: "个人资料",
					to: "/my/collect",
				},
				{
					icon: "icon-cust",
					title: "联系我们",
					to: "/my/collect",
				},
			],
			userInfo: null,
		};
	},
	methods: {
		// 登录
		toLogin() {
			this.$router.push({
				name: "Login",
			});
		},
		// 退出
		toExit() {
			this.$store.commit("setUser", null);
			this.userInfo = null;
			this.$toast.success("退出账号成功！");
		},
		// 获取用户信息
		async getUserInfo() {
			try {
				const res = await getUserInfoAPI();
				this.userInfo = res.data.body;
			} catch {
				this.$toast.fail("获取用户信息失败！");
			}
		},
		// TODO:编辑个人资料
		editInfo() {
			console.log("编辑个人资料！");
		},
	},
	computed: {
		// 获取 Vuex 中的 user
		...mapState(["user"]),
	},
	mounted() {
		if (this.user && this.user.token) this.getUserInfo();
	},
};
</script>

<style scoped lang="less">
.my-container {
	background: url("@/assets/imgs/bg.png") no-repeat top/100% auto;
	min-height: 100vw;
	padding-top: 120px;
	.login-top {
		background-color: #fff;
		width: 320px;
		height: 165px;
		margin: 0 auto;
		box-shadow: 0 0 10px 3px #ddd;
		.avator {
			display: inline-block;
			width: 100%;
			text-align: center;
			margin-top: -30px;
			img {
				margin: 0 auto;
				width: 60px;
				height: 60px;
				border-radius: 30px;
				border: 5px solid #f5f5f5;
				box-shadow: 0 2px 2px #bdbdbd;
			}
		}
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
			span {
				font-size: 13px;
				color: #333;
				margin-top: 15px;
			}
			button {
				width: 69px;
				height: 30px;
				background-color: #21b97a;
				border: 0;
				font-size: 13px;
				color: #fff;
				border-radius: 3px;
				margin-top: 15px;
			}
			.editInfo {
				margin-top: 15px;
				font-size: 12px;
				color: #999;
				&::after {
					display: inline-block;
					content: "\e905";
					font-family: "iconfont";
					transform: rotate(-90deg);
					vertical-align: baseline;
				}
			}
		}
	}

	// 导航部分
	.login-nav {
		margin-top: 10px;
		i.iconfont {
			font-size: 20px;
		}
		span {
			font-size: 13px;
			margin-top: 10px;
		}
	}

	// 加入我们
	.join {
		width: 100%;
		padding: 30px 10px;
	}
}
</style>
