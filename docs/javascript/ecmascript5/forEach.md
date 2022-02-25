### forEach 循环遍历

	let arr = [{title: '标题一'},{title: '标题二'},{title: '标题三'}];
	//第三个参数代表原数组
	arr.forEach((item, index, arr) => {
		item.title = item.title.substr(0, 2);
	})
	console.log(arr) // [{title: '标题'},{title: '标题'},{title: '标题'}]
	
	//forEach可以直接操作dom元素
	<style>
		.disable {
			color: #ddd;
		}
	</style>
	<ul>
		<li>hdcms</li>
		<li>starsky</li>
	</ul>
	
	let lis = document.querySelectorAll('ul li');
	lis.forEach((item) => {
		//点击切换颜色
		item.addEventListener('click', () => {
			this.classList.toggle('disable');
		})
	})