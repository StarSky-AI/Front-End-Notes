### sort() 数组排序

	let arr = [1,2];
	arr = arr.sort((a, b) => {
		return a - b;
	})
	console.log(arr); // 1, 2 (升序，从小到大)
	
	let arr2 = [1,2];
	arr2 = arr2.sort((a, b) => {
		return b - a;
	})
	console.log(arr2); // 2, 1 (降序，从大到小)
	
	let cart = [{price: 12000},{price: 7500},{price: 3200}];
	cart = cart.sort((a, b) => {
		return b.price - a.price;
	})
	console.log(cart); // [{price: 12000},{price: 7500},{price: 3200}];
	
	//sort() 原理
	let arr3 = [1,5,3,9,7];
	function sort(array, callback) {
		for(const n in array) {
			for(const m in array) {
				if(callback(array[n], array[m]) < 0) {
					const temp = array[n];
					array[n] = array[m];
					array[m] = temp;
				}
			}
		}
		return array;
	}
	arr3 = sort(arr3, (a, b) => {
		return b - a;
	})
	console.log(arr3); // [1,3,5,7,9]