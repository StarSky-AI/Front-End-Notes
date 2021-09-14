### splice() 数组删除指定位置的元素

	splice()会改变元素组结构
	let arr = [1,2,3,4,5];
	let hd = arr.splice(0, 3); //第一个参数代表从第几位开始截取，第二个代表截取到第几位
	console.log(hd); // [1, 2, 3] //代表删除了1, 2, 3
	console.log(arr); // [4, 5] //原数组剩下4, 5