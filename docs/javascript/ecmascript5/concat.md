### concat() 数组合并

	//在数组后面进行追加合并
	let arr = ["hdcms", "starsky"];
	let hd = [1,2,3,4];
	let cms = ["shop", "cms"];
	arr = arr.concat(hd, cms); //不考虑IE兼容的话推荐使用扩展运算符方法
	console.log(arr); //['hdcms', 'starsky', 1, 2, 3, 4, 'shop', 'cms']