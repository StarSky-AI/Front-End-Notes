### 变量的提升  

示例：  

	console.log(abc); //undefined
	var abc = "123"  //等价于var abc;//变量提升到前面了，变量声明没有赋值所以值为undefined  abc = "123";
	
	//函数的变量提升
	// function hd() {
	//     if(false) {
	//         var web = "baidu.com";
	//     }
	//     console.log(web) //undefined
	// }
	hd()
	//等价于
	function hd() {
	    var web;
	    if(false) {
	        web = "baidu.com";
	    }
	    console.log(web) //undefined
	}
	//总结：所以在使用var的时候一定要先声明后使用