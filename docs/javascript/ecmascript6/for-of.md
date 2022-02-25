### for-of循环遍历

for of 与 for in 的区别:(for in 通过下标进行取值， for of 直接取键值)

应用场景: for of是取迭代对象，注意：for of不可以直接遍历对象, for in 可以

	//遍历字符串
	let str = 'sdgsdjoighsoi';
	for(let content of str) {
		console.log(content); // s d g s d j o i g h s o i
	}

	//遍历数组
	let hdms = ['你好','哈哈'];
	for(let value of hdms) {
		console.log(value); // 你好  哈哈
	}
	
	//遍历数组对象
	let hd = [
		{title: '我是标题1',lesson: 1},
		{title: '我是标题2',lesson: 2},
		{title: '我是标题3',lesson: 3}
	];
	for(let value of hd) {
		console.log(value.title); // 我是标题1 我是标题2 我是标题3
		console.log(value.lesson); // 1 2 3
	}
	//for of 循环会改变引用类型里面的值，但不会改变数值类型的值。
	let arr = [1,2,3];
	for(let value of arr) {
		value += 10;
	}
	console.log(arr) // [1,2,3]
	let arr2 = [{num: 1},{num:2},{num:3}];
	for(let value of arr2) {
		value.num += 10;
	}
	console.log(arr2) // [{num: 11},{num: 12},{num: 13}]
	
	
	