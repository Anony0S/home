// 封装本地存储

// 储数据
export const set = (key, value) => {
	if (typeof value === "object") value = JSON.stringify(value);
	localStorage.setItem(key, value);
};

// 取数据
export const get = (key) => {
	const value = localStorage.getItem(key);
	// 原理： 不报错就返回转换后的值，报错就返回原值
	try {
		return JSON.parse(value);
	} catch {
		return value;
	}
};

// 删数据
export const remove = (key) => localStorage.removeItem(key);
