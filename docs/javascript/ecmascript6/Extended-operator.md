### ...扩展运算符

	//数组合并
	let arr = ['hdcms', 'houdunren'];
	let hd = ['js', 'css'];
	//以前利用for of方法
	for(const value of hd) {
		arr.push(value);
	}
	console.log(arr) // ['hdcms', 'houdunren', 'js', 'css']
	
	//使用...语法
	let arr = ['hdcms', 'houdunren'];
	let hd = ['js', 'css'];
	arr = [...arr, ...hd];
	console.log(arr); // ['hdcms', 'houdunren', 'js', 'css']
	
	//求和
	function sum(...args) {
		return args.reduce((s,v) => {
			return s += v;
		}, 0)
	}
	console.log(sum(1,2,3,34,54,5)) // 99