### every判断数组里全部为真才为真

const user = [
    {name: "李四", js: 89},
    {name: "张三", js: 99},
    {name: "马六", js: 55}
];
const res = user.every((item) => {
    return item.js >= 60;
})
console.log(res ? "全部同学都及格了" : "有同学没有及格");
