### var、let、const共同点

示例：  
	
	// console.log(abc) //外部不可以访问内部函数变量，内部函数的声明的变量属于私有空间，会报undefined
	// function func() {
	//     let abc = '123';
	// }
	// func()
	
	// let abc = '111'
	// function funa() {
	//     abc = '123';
	//     console.log(abc) //123，内部函数可以修改外部声明变量的值，无论是var还是let声明的
	// }
	// funa()
	// console.log(abc)
	
	// let abc = '111'
	// function funa() {
	//     let abc = '123';
	//     console.log(abc) //123，如果内部函数中声明了相同变量，相当于声明一个私有的空间，与外部互不影响，因为不在一个作用域内。
	// }
	// funa()
	// console.log(abc) //111
	
	// let abcd = '234';
	// function show() {
	//     let abc = '456';
	//     function run() {
	//         console.log(abc); //456 如果函数内部没有声明这个变量，则会向外部去找，直到找到为止。
	//     }
	//     run()
	// }
	// show();
	
	// let abcd = '234';
	// function show() {
	//     let abc = '456';
	//     function run() {
	//         console.log(abc); //456如果函数内部没有声明这个变量，则会向外部去找，直到找到为止。
	//         console.log(abcd) //234
	//     }
	//     run()
	// }
	// show();
	
	let abc = '234';
	function show() {
	    let abc = '456';
	    function run() {
	        abcd = '888'
	        console.log("1",abcd) //888 //第二个打印
	    }
	    run()
	    console.log("2",abc) //456 //第三个打印
	}
	console.log("3",abc) //234  //第一个打印,由于代码从上到下执行，console.log("3",abc)在show()前面，所以console.log("3",abc)先被打印，然后函数内部执行顺序是从内到外执行，所以先执行run()，再最后执行show()
	show();