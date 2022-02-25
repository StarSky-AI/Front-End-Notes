### 批量操作ref的方法

    例如批量获取ref
    [...div].map((item) => {
        item.addEventListener("click", () => {
            this.classList.toggle("hide");
        })
    })

