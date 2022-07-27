// request 请求
import axios from "axios"

export const request = axios.create({
	baseURL: "http://liufusong.top:8080",
})