
let operator = ["+","-","*","/","."];

let result = document.querySelector(".result")



//changeColor
document.getElementById("del").classList.add("calcArr")
document.getElementById("res").classList.add("calcArr");


// 
let getValue = ()=>{
    let current = result.innerHTML;
    return current.split(',').join('')
}
//showdisplay
function showDisplay(x){
    let current = result.innerHTML;
    let get = getValue();
    let lastIndex = current[current.length-1]

    if (result.innerHTML == 0){
        if(operator.includes(x)){
            return false
        }
        return result.innerHTML = x;
    }
    else if (operator.includes(x) && operator.includes(lastIndex) ){
        // console.log(current.substring(0,current.length-1)+x)
        return result.innerHTML = `${current.substring(0,current.length-1)}${x}`
    }else if (current.length >=14 ){
        return false
    }
    return result.innerHTML  += x;  
}


//dot
function dot(x){
    let current = result.innerHTML;
    let lastIndex = current[current.length-1]
    if(result.innerHTML == 0){
        return result.innerHTML = x
    }else if (operator.includes(x) && operator.includes(lastIndex) ){
        // console.log(current.substring(0,current.length-1)+x)
        return result.innerHTML = `${current.substring(0,current.length-1)} ${x}`
    }
    return result.innerHTML += x

}


//calc
function calc(){
let current = result.innerHTML;
try{
    result.innerHTML = eval(current)
}catch(el){
    return false
}
result.innerHTML = parseFloat(result.innerHTML).toLocaleString()
}

//clearlast
function del(){
    let current = result.innerHTML;
    if(current.length == 1 ){
        result.innerHTML = 0
    }
    else{
        result.innerHTML = current.substring(0,current.length-1)
       
    }
    
}

//allclear
function res(){
    result.innerHTML = 0;
}

