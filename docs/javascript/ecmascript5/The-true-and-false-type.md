### 哪些类型为真，哪些类型为假?

JavaScript中有 6 个值为“假”，这六个值是

1、false  
2、null  
3、undefined  
4、0  
5、'' (空字符串)  
6、NaN

	if(false || null || undefined || 0 || '' || NaN) {
		console.log("不会执行,全部为假")
	}
	
	
	if(!false || !null || !undefined || !0 || !'' || !NaN) {
		console.log("会执行,全部为真")
	}

