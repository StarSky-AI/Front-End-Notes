### 解构

	//对数组进行解构
	let arr = ['标题', '名字'];
	let [title, name] = arr;
	console.log(title) //标题
	console.log(name) //名字
	
	//对函数返回的数组进行解构
	function get() {
		return ["后盾人", 2010];
	}
	let [name, year] = get();
	console.log(name, year); //后盾人, 2010
	
	//取数组中某一个值
	let [, year] = ["后盾人", 2010];
	console.log(year); // 2010 运用逗号占位可以取到指定的值
	
	//解构和扩展运算符组合写法
	let [name, ...args] = ["后盾人", "houdunren.com", 2010];
	console.log(name); //后盾人
	console.log(args); // ["houdunren.com", 2010]
	
	//解构可以设置默认值
	let [name, year = 2010] = ["后盾人"];
	console.log(name);
	
	//函数传值解构
	function show([name, year]) {
		console.log(name,year);
	}
	show(["后盾人", 2010])