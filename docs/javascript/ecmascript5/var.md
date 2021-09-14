### 变量的声明
变量声明赋值相当于在内存中开辟一块空间来存储数据，通过var声明的变量名来查找出当前对应的数据。  

>定义: 变量是对内存地址的引用。

声明规则：  

	1. 声明的变量区分大小写  
	2. 声明的变量第一个字符必须是字母、$、下划线  
	3. 其他字符可以是字母，下划线，美元符或数字  

示例：  

	var tip = "abc";
	//可以简写成var tip;  tip = "abc"; 好处是可以声明多个，声明的变量可以用逗号隔开。例如var a, b, c;   a="小明";  b="小兰";  c="小红";
	
	/* 也可以让一个值等于多个变量 */
	var wip = cip = dip = "小黄";  //console.log(wip)  //小黄   //console.log(cip)  //小黄   //console.log(dip)  //小黄
	
	/* 数据类型会随着值发生改变的 */
	var abc = "小明";  //console.log(typeof abc) //string  
	abc = 99;  //console.log(typeof abc) //number
	abc = {};  //console.log(typeof abc) //object
	console.log(abc)
	//注意：用var声明的变量是没有块级作用域的，会对其他位置造成污染。

