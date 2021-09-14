### Object.freeze变量冻结

示例:
	
	const HOST = {
		url: "https://www.baidu.com/api",
		port: 443
	};
	Object.freeze(HOST);
	HOST.port = 80;
	console.log(HOST); //443
	
	
	