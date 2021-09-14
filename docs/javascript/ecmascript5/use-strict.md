### 严格模式

use strict

	//以前我们没有严格模式的情况下是可以进行变量的提升的。例如:
	web = "33";
	console.log(web);
	
但是设置了严格模式后:

	"use strict";
	web = "133";
	console.log(web); //会报错，web is defined
	
	web = "baidu.com";
	function run() {
		web = "huawei.com";
	}
	run();
	console.log(web); //huawei.com; 局部函数内变量污染了外部变量
	
	//所以应该规范书写
	var web = "baidu.com";
	function run() {
		var web = "huawei.com";
	}
	run();
	console.log(web); //baidu.com;
	
	//再例如我们用了js中的关键字作为变量去声明
	var class = 'xiaomi.com';
	console.log(class); // xiaomi.com
	
	//如果设置了严格模式
	"use strict";
	var class = 'xiaomi.com';
	console.log(class); // 会报错，Unexpected strict mode reserved word,因为不能用关键字去声明变量
	
	//严格模式作用域和变量作用域差不多，例如
	function show() {
		"use strict";
		function handle() {
			web = "hdcms.com";
		}
		handle();
	}
	function hd() {
		site = "小明";
	}
	hd(); //不会报错,因为use strict定义在show函数内部，不会影响到hd函数,严格模式会对当前作用域和它子作用域受影响。
