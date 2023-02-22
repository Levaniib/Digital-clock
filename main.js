let min = document.querySelector(".min")
let hour = document.querySelector(".hour")
let sec = document.querySelector(".sec")

let min1 = 0
let hour1 = 0
let sec1 = 0 

let clock = document.getElementById("#clock")

setInterval(()=>{
    sec.textContent = sec1 
    min.textContent = min1 
    hour.textContent = hour1  
    sec1++
    if(sec1 === 60){
        min1++
        sec1 = 0
    }else if( min1 === 60){
        hour1++
        min1 = 0
    }
}, 1000)
