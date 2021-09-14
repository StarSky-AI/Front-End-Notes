### 模板字符串

`${}`

可以调用函数进行渲染:

	function show() {
		return "houdunren.com";
	}
	let web = `www.${show()}`;
	console.log(web)
	
可以在模板字符串里面进行运算:

	let num = `${5 + 9}`;
	console.log(num);
	
可以在模板中连接:

	let lessons = [{title: '我是标题1', author: '课程1'},{title: '我是标题2', author: '课程2'},{title: '我是标题3', author: '课程3'}];
	function template() {
		return `<ul>${lessons.map(item => `<li>${item.title}</li>`).join("")}</ul>`;
	}
	document.body.innerHTML = template();
	
标签模板字符串:

	let lessons = [{title: '我是超链接', author: '课程1'},{title: '我是超链接', author: '课程2'},{title: '我是标题3', author: '课程3'}];
	function template() {
		return `<ul>${lessons.map(item => links`<li>标题: ${item.title}，课程: ${item.author}</li>`).join("")}</ul>`;
	}
	//字符串数量大于变量数量
	function links(strings, ...vars) {
		console.log(vars)
		return strings.map((str, key) => {
			return str + (vars[key] ? vars[key].replace('我是超链接', `<a href="https://www.baidu.com">我是超链接</a>`) : '');
		}).join("");
	}
	document.body.innerHTML += template();

