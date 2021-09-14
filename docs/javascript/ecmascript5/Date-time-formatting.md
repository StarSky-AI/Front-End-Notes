### 日期时间格式化

	const date = new Date("1992-2-12 10:22:18")
	function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
		const config = {
			YYYY: date.getFullYear(),
			MM: date.getMonth(),
			DD: date.getDate(),
			HH: date.getHours(),
			mm: date.getMinutes(),
			ss: date.getSeconds()
		};
		for(const key in config) {
			format = format.replace(key, config[key]);
		}
		return format;
	}
	console.log(dateFormat(date, "YYYY年MM月DD日"))
	
	// http://momentjs.cn (时间格式化库)
	
	const date= moment("1992-02-22 10:12:24");
	
	console.log(date.format("YYYY-MM-DD HH:mm:ss"));