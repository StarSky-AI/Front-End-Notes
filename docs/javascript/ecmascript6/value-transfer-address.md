### 标量与引用类型的传值与传址

传值：(代表a开辟一块内存空间，b管a要了一份，那么b复制了一个a,会给b重新开了一块内存空间，a的值发生变化不会对b造成影响，b的值发生变化也不会对a造成影响)
		
		let a = 1;
		let b = a;
		
		console.log(a, b); //1 1
		b = 3;
		console.log(a, b); //1 3
		
传址：(由于传递的是对象引用类型的数据，对象里面包括的数据比较大，可能会包含很多字段参数，所以内存不会单独给f开辟一块空间，只会给f提供一个内存地址，会让f和e共用一个内存空间)
	
		let e = {name: 'starsky'};
		let f = e;
		console.log(e, f); // {name: 'starsky'} {name: 'starsky'};
		f.name = 'haha';
		console.log(e, f); //  {name: 'haha'} {name: 'haha'}; 我们会发现它俩同时发生了改变，共用了一块内存空间。
		