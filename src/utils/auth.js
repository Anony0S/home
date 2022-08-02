// 处理 TOKEN 相关
import { get, set, remove } from "./storage";

const TOKEN_KEY = "HAOKE_USER";

export const getItem = () => get(TOKEN_KEY);
export const setItem = (value) => set(TOKEN_KEY, value);
export const removeItem = () => remove(TOKEN_KEY);
