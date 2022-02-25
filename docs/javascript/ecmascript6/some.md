### some 处理数组如果有一个为真，所有为真

    let arr = ["starsky", "baidu"];
    let res = arr.some((value, index, arr) => {
        console.log(value);
        return true;
    })
    console.log(res) 