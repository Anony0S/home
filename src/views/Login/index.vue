<template>
	<div class="login-container">
		<van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
		<van-form @submit="onSubmit">
			<van-field
				v-model="user.username"
				name="username"
				placeholder="请输入账号"
				:rules="rules.username"
			/>
			<van-field
				v-model="user.password"
				type="password"
				name="password"
				placeholder="请输入密码"
				:rules="rules.password"
			/>
			<div class="submit-btn">
				<van-button block type="info" native-type="submit">登录</van-button>
			</div>
		</van-form>
		<div class="toRegister" @click="register">
			<p>还没账号，去注册 ~</p>
		</div>
	</div>
</template>

<script>
import { loginAPI } from "@/api";
export default {
	name: "Login",
	data() {
		return {
			// 登录信息
			user: {
				username: "hzhmqd",
				password: "123456",
			},
			// 验证规则
			rules: {
				username: [
					{
						required: true,
						message: "账号不能为空！",
					},
					{
						pattern: /^\w{6,}$/,
						message: "账号格式错误！",
					},
				],
				password: [
					{
						required: true,
						message: "密码不能为空",
					},
					{
						pattern: /^\w{6}$/,
						message: "密码格式错误！",
					},
				],
			},
		};
	},
	methods: {
		// 左侧返回按钮
		onClickLeft() {
			this.$router.back();
		},
		// 提交按钮、
		async onSubmit() {
			try {
				// 登录等待期间
				this.$toast.loading({
					message: "登录中...",
					forbidClick: true,
					overlay: true,
					duration: 0,
				});
				const {
					data,
					data: { status, description },
				} = await loginAPI(this.user);
				if (status !== 200) return this.$toast.fail(description);
				this.$store.commit("setUser", data.body);
				this.$toast.success("登录成功！");
				this.$router.back();
				// 使用 Vuex 存储数据
			} catch (error) {
				this.$toast.fail("未知错误，请重新登录！");
				console.log(error);
			}
		},
		// 注册功能
		register() {
			console.log("去注册！");
		},
	},
};
</script>

<style scoped lang="less">
.login-container {
	::v-deep .van-nav-bar {
		background-color: #21b97a;
		.van-icon-arrow-left {
			font-size: 16px;
			color: #fff;
		}
		.van-nav-bar__title {
			font-size: 18px;
			font-weight: 500;
			color: #fff;
		}
	}
	.van-form {
		margin-top: 20px;
		.van-cell {
			height: 60px;
			font-size: 17px;
		}
		.submit-btn {
			margin: 15px;
		}
		.van-button--info {
			background-color: #21b97a;
			border: 0;
		}
	}
	.toRegister {
		text-align: center;
	}
}
</style>
