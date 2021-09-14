### 取数组最大值和最小值

取数组中最大值:

	let grade = [12,3,2,124];
	console.log(Math.max.apply(null, grade)); //124
	//可以简写成
	console.log(Math.max(...grade)); //124
	
取数组中最小值:

	let grade = [12,3,2,124];
	console.log(Math.min.apply(null, grade)); //124
	//可以简写成
	console.log(Math.min(...grade)); //124