### while循环判断语句

	document.write(`<table border="1" width="100%">`);
		let tr = 5;
		while(tr-- != 0) {
			let td = 3;
			document.write(`<tr>`);
				while(td-- != 0) {
					document.write(`<td>${'fdhgdrh'}</td>`);
				}
			document.write(`</tr>`);
		}
	document.write(`</table>`);
	
	//while(tr-- != 0) {console.log(tr)} 就等价于 for(let i = 0; i < arr.length; i++) {console.log(i)},但是while有循环次数限制，必须先定义好次数，才能进行循环