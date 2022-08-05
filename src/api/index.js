import { groups } from "./firstpage";
import { cityList, hotCityList } from "./city";
import { login, getUserInfo, myCollect, myRent } from "./user";
import { getHouseDetails } from "./house";

// 租房小组 API
export const groupsAPI = groups;

// 城市列表 API
export const cityListAPI = cityList;

// 热门城市列表
export const hotCityListAPI = hotCityList;

// 用户登录
export const loginAPI = login;

// 获取用户信息资料
export const getUserInfoAPI = getUserInfo;

// 我的收藏
export const myCollectAPI = myCollect;

// 发布房源列表
export const myRentAPI = myRent;

// 获取房屋具体信息
export const getHouseDetailsAPI = getHouseDetails;
