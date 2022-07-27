<template>
    <div class="firstpage">
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
        >
            <div slot="label" @click="selectPlace">
                <span>{{ this.$route.params.currentCity }}</span>
                <i class="iconfont icon-arrow"></i>
            </div>
            <template #action>
                <div @click="toMap">
                    <i class="iconfont icon-map"></i>
                </div>
            </template>
        </van-search>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>

        <!-- 第二部分 S -->
        <van-row class="firstpage-nav">
            <van-col span="6">
                <div>
                    <img src="@/assets/imgs/2.png" alt="" />
                    <span>整租</span>
                </div>
            </van-col>
            <van-col span="6">
                <div>
                    <img src="@/assets/imgs/4.png" alt="" />
                    <span>合租</span>
                </div>
            </van-col>
            <van-col span="6">
                <div>
                    <img src="@/assets/imgs/3.png" alt="" />
                    <span>地图找房</span>
                </div>
            </van-col>
            <van-col span="6">
                <div>
                    <img src="@/assets/imgs/1.png" alt="" />
                    <span>去出租</span>
                </div>
            </van-col>
        </van-row>
        <!-- 第二部分 E -->

        <!-- 第三部分 S -->
        <div class="firstpage-group">
            <div class="firstpage-group-top">
                <h2>租房小组</h2>
                <a href="#">更多</a>
            </div>
            <van-grid
                direction="horizontal"
                :column-num="2"
                gutter="10px"
                icon-size="50px"
            >
                <van-grid-item
                    :icon="`http://liufusong.top:8080${item.imgSrc}`"
                    v-for="item in groups"
                    :key="item.id"
                >
                    <div slot="text" class="grops-text">
                        {{ item.title }}
                        <br />
                        {{ item.desc }}
                    </div>
                </van-grid-item>
            </van-grid>
        </div>
        <!-- 第三部分 E -->
    </div>
</template>

<script>
import images1 from "@/assets/imgs/first-1.png";
import images2 from "@/assets/imgs/first-2.png";
import images3 from "@/assets/imgs/first-3.png";
import { groupsAPI } from "@/api";
export default {
    name: "FirstPage",
    data() {
        return {
            images: [images1, images2, images3],
            // 搜索框的值
            value: "",
            // 租房小组
            groups: [],
            // 搜索地址
            area: "AREA|88cff55c-aaa4-e2e0",
        };
    },
    methods: {
        onSearch() {
            // TODO: 搜索事件
            console.log("触发 搜索 事件");
        },
        // 选择地址
        selectPlace() {
            // TODO: 跳转选择地址页面
            this.$router.push({
                name: "City",
            });
        },
        toMap() {
            // TODO:跳转 地图找房
            this.$router.push({
                name: "Map",
            });
        },
        // 获取 groups 数据
        async getGrops() {
            try {
                const res = await groupsAPI(this.area);
                // console.log(res);
                this.groups = res.data.body;
            } catch (error) {
                console.log("获取数据错误", error);
            }
        },
    },
    mounted() {
        this.getGrops();
    },
};
</script>

<style lang="less">
.my-swipe .van-swipe-item {
    height: 212px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #ffffff;
}
.firstpage {
    img {
        width: 100%;
    }
    .icon-map {
        color: #fff;
        font-size: 25px;
    }
    .icon-arrow {
        margin-left: 2px;
        font-size: 12px;
        color: #7f7f80;
    }
    .van-search--show-action {
        // float: left;
        position: absolute;
        z-index: 1;
        width: 100%;
        background: rgba(255, 255, 255, 0);
        padding: 20px;
    }
    .van-search__content {
        padding-left: 5px;
    }
    .van-search__action {
        height: 34px;
        line-height: 34px;
        padding-right: 0;
    }

    // 第二部分
    .firstpage-nav {
        background-color: #fff;
        padding-bottom: 10px;
        img {
            padding: 15px;
        }
        span {
            display: block;
            text-align: center;
            margin-top: -5px;
            font-size: 16px;
        }
    }

    // 第三部分
    .firstpage-group {
        .firstpage-group-top {
            // background-color: pink;
            display: flex;
            justify-content: space-between;
            padding: 15px 10px;

            h2 {
                padding: 0;
                margin: 0;
                font-size: 15px;
            }

            a {
                color: #787d82;
                font-size: 14px;
                font-weight: 400;
            }
        }
        .grops-text {
            font-size: 14px;
            line-height: 20px;
            color: #333;
            margin-left: 10px;
        }
    }
}
</style>