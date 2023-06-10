let counter = document.querySelector('#count');
let but1 = document.querySelector('#increment');
let but2 = document.querySelector('#decrement');
function increment(){
    let value = parseInt(counter.innerText);
    value = value+1;
    counter.innerText = value;    
}

but1.addEventListener("click",(event)=>{
    event.target.style.backgroundColor = "red";
    setTimeout(()=>{
        event.target.style.backgroundColor = ""
    },500)
})

but2.addEventListener("click",(event)=>{
    event.target.style.backgroundColor = "skyblue";
    setTimeout(()=>{
        event.target.style.backgroundColor = ""
    },500)
})

function decrement(){
    let value = parseInt(counter.innerText);
    value = value - 1;
    counter.innerText = value;
}