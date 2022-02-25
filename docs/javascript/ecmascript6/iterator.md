### iterator迭代器

    let arr = ["starsky","baidu"];
    let values = arr.values();
    //迭代器方法一：
    while(({value, done} = values.next())&& done === false) {
        console.log(value); //starsky  baidu
    }
    //迭代器方法二：
    for(const value of arr.values()) {
        console.log(value)
    }
    //取key
    for(const key of arr.keys()) {
        console.log(key) 0, 1
    }
    //迭代方法三(推荐)：
    for(const [key, value] of arr.entries()) {
        console.log(value)
    }