### 数组转字符串

方法一：(利用join("")进行转换)
	let arr = ["hdcms", "starsky"];
	console.log(arr.join("")); // hdcmsstarsky
	
	let arr = ["hdcms", "starsky"];
	console.log(arr.join("|")); // hdcms|starsky
	
方法二：(利用toString()进行转换)

	let arr = ["hdcms", "starsky"];
	console.log(arr.toString()); // hdcms,starsky 少用这个，这个一般用于数字转字符串比较多
	
方法三：（利用String方法进行强制转换）

	let arr = String([1, 3, 4]);
	console.log(arr); //1,3,4