### split() 字符串转数组

	let str = "hdcms,houdunren";
	let hd = str.split(",");
	console.log(hd); // ['hdcms', 'houdunren']
	console.log(hd[0]); // hdcms
	console.log(hd.join(" | ")); // hdcms | houdunren