### 字符串截取

slice()方法:

	let str = "dsigysdioghsdoig";
	console.log(str.slice(0, 3)); //第一个参数代表从第几位哪里开始截取，0代表不截取。 第二个参数代表截取到哪里
	console.log(str.slice(-3)); //从字符串末尾往前截取3个字符
	console.log(str.slice(-3, -1)); //第一个参数代表从字符串末尾往前截取3个字符。 第二个参数代表从末尾什么位置开始截取
	
substring()方法:

	let str = "dsigysdioghsdoig";
	console.log(str.substring(0, 3)); //第一个参数代表从第几位哪里开始截取，0代表不截取。 第二个参数代表截取到哪里
	console.log(str.substring(-3)); //没有意义，不会发生截取
	console.log(str.substring(-3, -1)); //第一个参数代表从字符串末尾往前截取3个字符。 第二个参数代表从末尾什么位置开始截取
	
substr()方法:

	let str = "dsigysdioghsdoig";
	console.log(str.substr(0, 3)); //第一个参数代表从第几位哪里开始截取，0代表不截取。 第二个参数代表截取几个字符
	console.log(str.substr(-3)); //从字符串末尾往前截取3个字符
	console.log(str.substr(-3, -1)); //双负数没有意义，不会发生截取
