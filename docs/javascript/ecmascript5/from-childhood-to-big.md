### 字体从小到大排列

	let str = 'starsky';
	for(let i = 0; i < str.length; i++) {
		let span = document.createElement("span");
		span.style.fontSize = (i + 1) * 10 + 'px';
		span.innerHTML = str[i];
		document.body.append(span);
	}