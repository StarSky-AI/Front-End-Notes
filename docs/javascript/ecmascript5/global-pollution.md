### 全局污染

示例：

	function zhangsan() {
	    web = 'houdunren.com'; //如果函数内部没有进行var或者let声明，直接使用会污染全局
	}
	
	//当我们不知道上面函数里有web的变量赋值过的时候，我们直接声明一个相同名字的变量，那么zhangsan函数内的web会污染到全局声明的web
	let web = "后盾人";
	
	zhangsan();
	console.log(web); //houdunren.com, 所以为了防止这个现象的发生，我们要在函数内部先用var或let声明变量，这样就不会造成全局污染
	//如果还是有人忘记声明，那es5用严格模式解决，顶部的script标签下加"use strict";
	
	//window全局对象污染与重复声明
	var screenLeft = 88; //使用var在全局声明的变量会自动放到window中，作为window的属性,如果window中之前就有这个属性就会造成污染。
	console.log(window.screenLeft)
	
	//如果使用let声明就规避了这个污染
	let screenLeft = 88;
	console.log(window.screenLeft)  //0