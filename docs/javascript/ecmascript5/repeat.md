### repeat 重复生成相同的字符串

	console.log("*".repeat(3)) // ***
	
	//手机号加星号
	function phone(mobile, len = 4) {
		let start = String(mobile).substr(0, 3);
		let end = String(mobile).substr(-4)
		return `${start}${"*".repeat(len)}${end}`;
	}
	console.log(phone(13333333333, 4))