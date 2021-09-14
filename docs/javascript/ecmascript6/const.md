### const声明

示例：  
	
	const常量在("同一个作用域")中声明后不可以更改声明后的值，例如：
	const url = "https://baidu.com/api/v1";
	url = "hdcms";  //这种写法
	
	//全局声明一个const，全局的其中一个函数体内也声明一个const则不会报错，因为没有在一个作用域内，所以不会影响。
	const url = "https://baidu.com/api/v1";
	function show() {
		const url = "https://baidu.com/api/v1";
	}
	show();
	
	//const如果是字符串赋值的这种基本量标量是不可以对值进行更改的，如果是对象引用类型可以对值进行更改，例如：
	const config = {
		url: 'https://www.baidu.com/';
	};
	config.url = 'https://www.huawei.com/';
	
	//如果在花括号块级作用域进行赋值也不会报错
	const url = "https://www.baidu.com/";
	{
		const url = 'https://www.huawei.com/';
	}
	console.log(url);

	