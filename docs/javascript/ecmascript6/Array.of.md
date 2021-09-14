### Array.of 创建数组

	let array = ["starsky"];
	array[3] = "sherry";
	console.log(array.length); // 4
	console.log(array[2]); //undefined
	//没有系统会为我们补全内容，内容为empty，打印为undefined
	console.log(array); // ['starsky', empty * 2, 'sherry']
	
	//用new Array创建数组，如果只有一个元素，那么打印length，会出现6个空元素，所以我们需要采用Array.of去创建更加严谨
	let cms = new Array(6); //[6]
	console.log(cms.length); // 6
	
	let arr = Array.of(6); 
	console.log(arr); // [6]
	console.log(arr.length); // 1 
	