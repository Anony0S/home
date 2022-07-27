// 城市列表
import { request } from "@/utils/request";

// 获取城市列表
export const cityList =  level => request({
	url: "/area/city",
	params: {
		level,
	}
})

// 获取热门城市列表
export const hotCityList = () => request({
	url: "/area/hot",
})