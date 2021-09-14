### continue和break使用场景

注意: continue和break只能用于for循环系列，如:for、for in、for each、for of和while和do while语句中。

continue可以用于过滤:（例如过滤奇数和偶数）

	for(let i = 1; i <= 10; i++) {
		if(i % 2) continue;
		console.log(i); // 2 4 6 8 10
	}
	
break可强制退出循环:
	
	let count = 0;
	for(let i = 1; i <= 10; i++) {
		if(i % 2) {
			if(count++ == 3) break;
			console.log(i);
		}
	}
	