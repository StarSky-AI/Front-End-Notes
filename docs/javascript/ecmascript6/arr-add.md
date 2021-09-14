### 数组后面追加元素

	//取数组的length追加
	let array = ["hdcms", "houdunren"];
	array[array.length] = "cms";
	console.log(array)
	
	//使用扩展运算符合并追加
	let array = ["hdcms", "houdunren"];
	let hd = ["shop", "cms"];
	array = [...array, ...hd];
	console.log(array)
	
	//使用push()方法追加
	let array = ["hdcms", "houdunren"];
	array.push("shop");
	console.log(array);
	
	//push和扩展运算符组合写法
	let array = ["hdcms", "houdunren"];
	let hd = ["shop", "cms"];
	let length = array.push("live", ...hd);
	console.log(length) // 4 
	console.log(array) // ["hdcms", "houdunren", "live", "shop", "cms"]
	


	