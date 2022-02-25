### find 数组对象查找

	let arr = [{name: 'js'}, {name: 'css'}, {name: 'html'}];
	let status = arr.find(item => item.name === 'css');
	console.log(status.name) // css
	
	//find原理
	let arr2 = [1,2,3,4,5];
	function find(array, callback) {
		for(const value of array) {
			if(callback(value)) return value;
		}
		return undefined;
	}
	console.log(find(arr2, item => item === 2)); // 2