### splice() 数组删除指定位置的元素或替换删除后的元素

删除功能：splice()会改变元素组结构

	let arr = [1,2,3,4,5];
	let hd = arr.splice(0, 2); //第一个参数代表删除的起始位置，第二个代表从起始位置往后算删除的个数
	console.log(hd); // 代表删除了[1, 2]
	console.log(arr); // 那么原数组剩下[3, 4, 5]
	
替换：

	let arr = [1,2,3,4,5];
	let hd = arr.splice(0, 2, "hdcms", "starsky"); 
	console.log(hd); // 代表删除了[1, 2]并且将[1, 2]替换成["hdcms", "starsky"]
	console.log(arr); // 那么原数组变为['hdcms', 'starsky', 3, 4, 5]
	
增加：(指定位置增加)

	let arr = [1,2,3,4,5];
	arr.splice(1, 0, "starsky");
	console.log(arr) //[1, 'starsky', 2, 3, 4, 5],我们不删除，那么第二个参数写成0，并且在第2位添加新的内容,原数组会发生改变
	
增加：(首位增加)

	let arr = [1,2,3,4,5];
	arr.splice(0, 0, "starsky");
	console.log(arr) //['starsky', 1, 2, 3, 4, 5]
	
增加：(末尾增加)

	let arr = [1,2,3,4,5];
	arr.splice(arr.length, 0, "starsky");
	console.log(arr) //[1, 2, 3, 4, 5, 'starsky']
	

	