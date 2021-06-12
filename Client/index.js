const like_btn = document.querySelector('#like_btn');
const like_count = document.querySelector('#like_count');
const date_ = document.querySelector('#date_');
const timer = document.querySelector('#timer');
const reset = document.querySelector('#reset');

like_btn.addEventListener('click' , function(){
     like_count.textContent = parseInt(like_count.textContent) + 1
})

days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let date = (new Date())
date_.innerHTML = days[date.getDay()];

function increase_timer(){
    timer.textContent = parseInt(timer.textContent) + 1
}

setInterval(() => {
    increase_timer();
},1000)

reset.addEventListener('click', function(){
    timer.textContent = 0;
})