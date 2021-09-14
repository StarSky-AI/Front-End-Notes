### 循环遍历dom节点，对dom进行操作

	方法一：
	
		<div>houdunren.com</div>
		<div>hdcms.com</div>
		
		const div = document.querySelectorAll('div');
		Array.from(div).map((item) => {
			console.log(item) // <div>houdunren.com</div>  <div>hdcms.com</div>
		})
		
	方法二：
	
		<div>houdunren.com</div>
		<div>hdcms.com</div>
		
		const div = document.querySelectorAll('div');
		Array.prototype.map.call(div, (item) => {
			console.log(item) // <div>houdunren.com</div>  <div>hdcms.com</div>
		})
		
	方法三：(推荐)
	
		<div>houdunren.com</div>
		<div>hdcms.com</div>
		
		const div = document.querySelectorAll('div');
		
		[...div].map((item) => {
			item.addEventListener('click', function() {
				this.classList.toggle('hide')
			})
		})

	