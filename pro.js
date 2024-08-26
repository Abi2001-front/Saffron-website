var mainbar= document.querySelector('.fontclass1');


function openbar(){
mainbar .style.left="0";
}
function closebar(){
    mainbar.style.left="-70%";
}



// light

const mode=document.getElementById('modetoggle');
mode.addEventListener('change',togglemode);
function togglemode()
{
    document.body.classList.toggle('darkmode');
}


// collection
var productcollection =document.getElementById("collections")

var search=document.getElementById("search")
var product= productcollection.querySelectorAll("div")


search.addEventListener("input",function(){
   var entervalue = event.target.value.toUpperCase()
   for(i=0;i<product.length;i++){
    var paraname= product[i].querySelector("h3").textContent
    if(paraname.toUpperCase().indexOf(entervalue)<0)
        {
        product[i].style.display="none"
    }
    else{
        product[i].style.display="block"
    }

   }

})

// slides

var slideindex=1;
showclick(slideindex);

function plusclick(n){
    showclick(slideindex+=n);
}
function showclick(n){
    var i;
    var x=document.getElementsByClassName("myslides");
    if (n >x.length)
        {
        slideindex=1
    }
if (n <1)
        {
            
        slideindex = x.length
    }
    for (i=0;i < x.length; i++){
        x[i].style.display="none";
    }
    x[slideindex-1].style.display="block";
}






