### null与undefined

null:（如果变量是引用类型（例如对象这种）声明了，但是没有赋值，初始化的时候可以赋值成null）
	
	let config = null; //或者定义成 let config = {}; 都行
	
	config = {name: 'starsky'};
	
undefined:(如果变量是基本类型（例如字符串、数值）声明了，但是没有赋值，初始化的时候可以赋值成undefined)

	let web = undefined; //或者定义成let web = ''; 都行
	
	web = 'www.baidu.com';
	
	function show(name) {
		console.log(name); //如果name没有传参的时候，那么值也会是undefined;
	}
	console.log(show()); //函数没有返回值，那么结果也是undefined
	
	function star(num) {
		if(num == undefined) {
			num = 5;
		}
		//上面语句可以简写成 num = num || 5; 因为undefined在逻辑表达式中是不成立的，是false
		for(let i = 0; i < num; i++) {
			document.write("*");
		}
	}
	star();

	