var mainbar= document.querySelector('.fontclass1');


function openbar(){
mainbar .style.left="0";
}
function closebar(){
    mainbar.style.left="-70%";
}


// quality

const minus= document.querySelector('.sub');
const plus =document.querySelector('.add');
const qtytext =document.querySelector('#qty');

minus.addEventListener('click',()=>{
    let quality =parseInt(qtytext.value);
  if(quality>0){
      quality--;
       qtytext.value=quality;
  }  

});

plus.addEventListener('click',function(){
    let quality =parseInt(qtytext.value);
    if(quality>0 && quality <6){
        quality++;
        qtytext.value=quality;
    }
});







