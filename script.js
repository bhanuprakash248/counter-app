
let count = 0;
let countText = document.getElementById("count");
let increaseBtn = document.getElementById("increment");
let decreaseBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
increaseBtn.addEventListener("click",function(){
    count++;
    countText.innerText=count;
});
decreaseBtn.addEventListener("click",function(){
    count--;
    countText.innerText=count;
});
resetBtn.addEventListener("click",function(){
    count= 0;
    countText.innerText=count;
});