### 数组内元素移动功能

	function move(array, from, to) {
		if(from < 0 || to >= array.length) {
			console.error("参数错误")
			return;
		}
		const newArray = [...array];
		let item = newArray.splice(from, 1); //删除了第二位，数量删了1个
		newArray.splice(to, 0, ...item); //从数组第三位添加了删除的item
		return newArray;
	}
	let array = [1,2,3,4];
	console.log(move(array, 1, 2)) //[1, 3, 2, 4]