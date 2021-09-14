### slice() 数组的截取

	//slice()截取不会改变元素组的长度和值
	let arr = [1,2,3,4,5];
	let hd = arr.slice(1);
	console.log(hd); //[2,3,4,5] 
	console.log(arr); // [1,2,3,4,5]