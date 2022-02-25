### findIndex() 查找元素索引值

	let arr = [{name: 'js'}, {name: 'css'}, {name: 'html'}];
	let index = arr.findIndex(item => item.name === 'css');
	console.log(index); //找到了数组下标为1