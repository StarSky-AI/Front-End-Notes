### Math.random() 随机数

随机生成0~5的数(可以配合Math.floor想上取整)

	console.log(Math.floor(Math.random() * (5 + 1))); //加1才能取到5
	
随机生成区间2~5

	console.log(2 + Math.floor(Math.random() * (5 - 2 + 1)));
	
数组中去随机数:

	let arr = ['李四', '赵云', '张三', '王五', '马六'];
	
	//获取数组随机下标
	let index = Math.floor(Math.random() * arr.length);
	
	console.log(arr[index]);
	
取张三和王五之间:

	let arr = ['李四', '赵云', '张三', '王五', '马六'];

	let index = 2 + Math.floor(Math.random() * (4 - 2));
	
	console.log(arr[index]);
	