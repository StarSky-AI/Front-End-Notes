### let声明

示例：  

	// console.log(abc) //暂时性死区(TDC)
	// let abc = '123'; //let特点，如果使用let声明的,必须在声明之后再使用，不能在声明前使用。
	let web = "这是一段测试文字";
	function fun() {
	    //如果函数体内没有声明这个变量，它会去外部找，可以访问外部变量。
	    console.log(web) //这是一段测试文字
	}
	fun()
	
	// function abc() {
	//     console.log(zxc) //会报错，会产生暂时性死区，但不影响上面函数正常打印,所以规范必须写在声明之后进行使用
	//     let zxc = "测试文字"
	// }
	// abc()
	
	//b会报错，会出现暂时性死区，等价于let b; a = b; b = 3; //变量提升，会出现暂时性死区，会警示报错
	// function aaa(a = b, b = 3) {
	//     console.log(a)
	//     console.log(b)
	// }
	// aaa()
	
	//正确写法
	function aaa(a = 2, b = 3) {
	    console.log(a)
	    console.log(b)
	}
	aaa()