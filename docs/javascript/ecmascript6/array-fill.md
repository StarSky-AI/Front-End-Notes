### Array().fill() 数组填充

	console.log(Array(5).fill("starsky")) // ['starsky', 'starsky', 'starsky', 'starsky', 'starsky'];
	
	//指定位置添加,第二个参数代表从第一个位置添加，指向到第二个位置
	console.log(Array(1,2,3,4).fill("starsky", 1, 2)) // [1, 'starsky', 3, 4]
	console.log(Array(1,2,3,4).fill("starsky", 1, 3)) // [1, 'starsky', 'starsky', 4]
	
	