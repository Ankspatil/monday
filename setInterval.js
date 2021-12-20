let counter = 0 ;

let cb =function()
{
    counter++;
    document.getElementById("input1").innerHTML =counter;
}
let id_2 = setInterval(cb,1000);

let btn = document.getElementById("timer_2");
btn.addEventListener('click',function(){
    document.body.style.backgroundColor = "pink";

    clearInterval(id_2);
})




//
let btn_2 = document.getElementById("timer_1");
btn_2.addEventListener('click',function(){
    document.body.style.backgroundColor = "#ff4e4e";
    id_2 = setInterval(cb,1000);
})
let btn_3 = document.getElementById("timer_3");
btn_3.addEventListener('click',function(){
    clearInterval(id_2);
   counter = 0;
   document.getElementById('input1').innerHTML = counter;
   document.body.style.backgroundColor = "lightgreen";
  
});
let btn_4 = document.getElementById("timer_4");
 btn_4.addEventListener('click',function(){
counter = 0 ;

document.getElementById("input1").innerHTML = counter;
document.body.style.backgroundColor = "#ff6a6a";
})








