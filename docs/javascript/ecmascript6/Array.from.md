### Array.from()

	//字符串转数组
	let str = 'starsky';
	console.log(Array.from(str));
	
	//对象设置长度属性才能转成数组
	let obj = {
		0: '标题',
		1: '名字',
		length: 2
	};
	console.log(Array.from(obj)); // ['标题', '名字']
	
	//遍历数组元素
	let arr = [{
		title: "标题1",
		name: "名称1"
	},{
		title: "标题2",
		name: "名称2"
	}];
	Array.from(arr, (item) => {
		item.show = false;
	})
	console.log(arr) [{title: "标题1", name: "名称1", show: false},{title: "标题1", name: "名称1", show: false}]