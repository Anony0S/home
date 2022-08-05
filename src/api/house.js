import { request } from "@/utils/request";

// 查询房屋具体信息
export const getHouseDetails = (id) =>
	request({
		url: "/houses/" + id,
	});
