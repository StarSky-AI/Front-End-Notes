### includes() 字符串或数组查找

	let web = "www.baidu.com";
	console.log(web.includes('b')); //true  如果找到了就返回真
	
	let arr = [1,2,'嘻嘻',4,5,6];
	console.log(arr.includes('嘻嘻')) //true  如果找到了就返回真
	
	//includes() 实现原理
	let arr2 = [1,2,3,4,5,6];
	function includes(array, find) {
		for(const value of array) 
		if(value === find) return true;
		return false;
	}
	console.log(includes(arr2, 99)) //false