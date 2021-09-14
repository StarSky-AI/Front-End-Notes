### Array.isArray判断是否为数组

	console.log(Array.isArray(1)); // false
	console.log(Array.isArray('你好')); // false
	console.log(Array.isArray({title: '标题'})); // false
	console.log(Array.isArray([])); // true