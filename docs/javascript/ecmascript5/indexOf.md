### indexOf 字符串查找

	let web = "www.baidu.com";
	console.log(web.indexOf("m")); //indexOf是通过下标进行查找的，0为第一位
	if(web.indexOf("b") !== -1) {
		console.log("值存在")
	}else {
		console.log("值不存在")
	}