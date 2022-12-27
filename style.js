let xmark = document.getElementById("xmark");
let bar = document.getElementById("bar");
let link = document.getElementById("link");

bar.addEventListener('click' , function(){
link.style.right="0px"
bar.style.display="none"
})
xmark.addEventListener('click' , function(){
link.style.right="-200px"
bar.style.display="inline"
})


