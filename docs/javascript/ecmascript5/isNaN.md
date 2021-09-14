### isNaN,判断不是一个数字

	let num = 2 / 'hfgmkfg';
	console.log(Number.isNaN(num)); // true  注意，不可以对纯字符串进行判断，只能判断运算的结果是否存在NaN