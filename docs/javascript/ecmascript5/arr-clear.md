### 清空数组

	//清空原数组(直接从内存中彻底清除)
	let arr = [1,2,3,4,5];
	while(arr.pop()) {}
	console.log(arr) // []
	
	//清空原数组(直接从内存中彻底清除)
	let arr = [1,2,3,4,5];
	arr.splice(0, arr.length)
	console.log(arr) // []
	
	//原数组不会清空，新数组会清空（因为新给newArr开辟了一块内存空间，清空只是赋值给newArr一个空数组）
	let arr = [1,2,3,4,5];
	let newArr = arr;
	newArr = [];
	console.log(newArr) // []
	console.log(arr) // [1,2,3,4,5];
	
	//原数和新数组会清空
	let arr = [1,2,3,4,5];
	let newArr = arr;
	newArr.length = 0;
	console.log(newArr) // []
	console.log(arr) // [];