### indexOf 字符串或数组查找

	let web = "www.baidu.com";
	console.log(web.indexOf("m")); //indexOf是通过下标进行查找的，0为第一位
	if(web.indexOf("b") !== -1) {
		console.log("值存在")
	}else {
		console.log("值不存在")
	}
	
	let arr = [1,2,'你好',3,4,2];
	console.log(arr.lastIndexOf('你好')); //从最后一位开始向左进行查找 // 2
	注意indexOf是严格类型匹配，不支持隐士类型转换
	
	indexOf和lastIndexOf支持两个参数
	let arr = [1,2,'你好',3,4,2];
	console.log(arr.indexOf('你好',-3));
	console.log(arr.lastIndexOf('你好',-3));
	
	