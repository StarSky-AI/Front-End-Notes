### var、let、const不同点

	1. var声明变量存在变量提升，let和const不存在变量提升

	2. let、const都是块级局部变量

	3. 同一作用域下let和const不能声明同名变量，而var可以

	4. let只能先声明，再进行调用；var可以先调用再声明

	5. let在声明的时候可以不用初始化，const在声明的时候必须要进行初始化。

	6. const定义的常量的值在同一个作用域下不可以再进行赋值修改的，但是const定义的数组和对象是可以进行进行赋值修改的

	7. 用let ，const声明的全局变量不归window所有

