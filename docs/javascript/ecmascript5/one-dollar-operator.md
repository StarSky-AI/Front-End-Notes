### 一元运算符的前置与后置操作

	let n = 1;
	//++n;可以理解成n = n + 1;
	++n;
	console.log(n); // 2
	
	let n = 1;
	//n++;可以理解成n = n + 1;
	n++;
	console.log(n); // 2
	
	//如果参与表达式中就不同了
	let f = 2;
	let d = f + ++n; //相当于f+ (n = n + 1)
	console.log(d); // 4
	
	let x = 3;
	let a = x + n ++;
	console.log(d); // 3  这样n就不相对自身增加了，先和x进行相加，所以是3
	