### 字符串转number

方法一：(利用乘1的方式进行转换)

	let string = "99";
	console.log(string * 1 + 78); //177
	
方法二：(利用Number()方法进行强制转换)

	let string = "99";
	console.log(Number(string) + 78); //177
	
方法三：(利用parseInt取整进行转换)

	let string = "99px";
	console.log(parseInt(string)); //99
	
方法三：(利用parseFloat取整进行转换)

	let string = "99.89px";
	console.log(parseFloat(string)); //99.89