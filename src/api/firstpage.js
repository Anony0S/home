import { request } from "@/utils/request";

// 租房小组
export const groups = area => request({
	url: "/home/groups",
	params: {
		area,
	}
})