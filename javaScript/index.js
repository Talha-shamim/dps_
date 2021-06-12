window.onload = function(){
    const count_ = document.querySelector('#count');
    const increase = document.querySelector('#increase');
    const decrease = document.querySelector('#decrease');
    const reset = document.querySelector('#reset');
    const heading = document.querySelector('#heading');

    increase.addEventListener('click', function(){
        count_.value = parseInt(count.value)+1; 
    });

    decrease.addEventListener('click', function(){
        if(parseInt(count_.value) > 0 ){
            count_.value = parseInt(count.value)-1; 
        }
        else alert('you cant decrease more')
    });

    reset.addEventListener('click', function(){
        count_.value = 0; 
    });

    heading.addEventListener('click', function(){
        if(heading.textContent === "My Counter"){
            heading.textContent = "Hello World";
        }
        else{
            heading.textContent = "My Counter";
        }
    })
}