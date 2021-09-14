### 块级作用域的特性  

示例：  

	//块级作用域指向的是花括号内部的变量
	// var i = 99;
	// for(var i = 0; i < 5; i++) {
	//     console.log(i);
	// }
	// console.log(i); //5 for循环里用var声明的变量会污染全局声明的变量，我们为了防止污染全局定义的变量，我们在for循环中用let去声明变量，让它只作用于for循环内部函数，产生块级作用域，只服务于当前for循环内。这样就不影响全局声明的变量了。
	
	//正确写法
	// var i = 99;
	// for(let i = 0; i < 5; i++) {
	//     console.log(i);
	// }
	// console.log(i); //99
	
	//以前没有块级作用域的时候我们都用立即执行函数取代替块级作用域，立即执行函数阻止了外部访问内部变量,控制了作用域对全局的污染 例如
	(function() {
		var $ = (window.$ = {});
		$.web = "hdms";
		//为了不影响全局，我们把变量封装到函数里面，然后在全局调用
		var url = "hdcms.com";
		$.getUrl = function() {
			return url;
		}
	}.bind(window)());
	//如果想在全局调用url,那么使用console.log($.getUrl())
	
	//简洁写法，以前版本是没有块级作用域的，es6版本支持了块级作用域，用花括号包裹，并且花括号内必须用let或者const声明，才会产生块级作用域
	{
		let $ = (window.$ = {});
		$.web = "hdms";
		//为了不影响全局，我们把变量封装到函数里面，然后在全局调用
		let url = "hdcms.com";
		$.getUrl = function() {
			return url;
		}
	}
	//如果想在全局调用url,那么使用console.log($.getUrl()),优点：更清晰一点，减少耦合度。
	