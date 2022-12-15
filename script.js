var timer;
var ele = document.getElementById('timer');

(function (){
  var sec = 0;
  timer = setInterval(()=>{
    ele.innerHTML = '00:'+sec;
    sec ++;
  }, 1000) // each 1 second
})() 

function pause(){
  clearInterval(timer);
}



let n1 = Math.floor(Math.random()*100+ 1)
let n2 = Math.floor(Math.random()*100 + 1)

 document.getElementById('v1').value = n1
 document.getElementById('v2').value = n2 




function hello2(){
    let n1 = Math.floor(Math.random()*100+ 1)
let n2 = Math.floor(Math.random()*100 + 1)

document.getElementById('v1').value = n1
document.getElementById('v2').value = n2
  document.getElementById('answ').innerText = '';
}






   function hello(){
    const ans = n1 + n2 ;
    var cool = document.getElementById('answ').value; 
    
    if(cool == ans){
        alert('Well done !')
    }else  {
        alert("Correct Ans is" + ans +" . Try Again.")
    }
    
    hello2()

    
   
}
    



