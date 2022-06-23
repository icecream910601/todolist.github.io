//if 第一步驟 adding validation for empty input field
//querySelector() 方法返回文档中匹配指定CSS 选择器的一个元素。
//nodeValue属性可以返回或者设置指定节点的值。>>alert跳不出來 改為value
//如輸入空值,跳出警示視窗

//else 第二步驟 adding a new task
//innerHTML在JS是雙向功能：獲取物件的內容  或  向物件插入內容；屬性用於設定或返回指定標籤之間的 HTML 內容。
//用`這符號
//輸入跑出來的清單(task)要寫在js

//button 到font awesome icons
//到css 設定垃圾桶與跑出來清單的樣式

//第三步驟 delet a task
// length 屬性可以用來判斷判斷元素的數目

//第四步驟 croosing off a completed task
//去css 寫completed的樣式
//點擊出現或消失刪除線 清單

//第五步驟 Clearing input field after each entry
//每次輸入完後input都會清空

document.querySelector("#push").onclick=function(){
    console.log(123);
    if(document.querySelector("#newtask input").value.length == 0){
        alert("Please Enter a TasK")
    }
    else{
        document.querySelector("#tasks-all").innerHTML 
        +=`
        <div class="task"> 
            <span id="taskname">
                ${document.querySelector("#newtask input").value}
            </span>
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length ;i++) {
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick=function(){
                this.classList.toggle("completed")
            }
        }

        document.querySelector("#newtask input").
        value="";


    }
}

