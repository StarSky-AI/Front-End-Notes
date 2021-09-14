### switch语句

适用于单一条件比对的时候:

	let error = "hd"; //如果error没有碰到break，那么会一直走下去,直到找到break才会跳出,如果都没找到符合的条件，那么会走default
	switch(error) {
		case "notice":
		case "warning": 
			console.log("提示或警告消息");
			break;
		case "error":
		default:
			console.log("错误消息");
	}