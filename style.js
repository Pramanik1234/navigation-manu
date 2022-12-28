let xmark = document.getElementById("xmark");
let bar = document.getElementById("bar");
let link = document.getElementById("link");

bar.addEventListener('click' , function(){
link.style.right="0px"
link.style.display="inline"
link.style.transition="1s"
})
xmark.addEventListener('click' , function(){
link.style.right="-200px"

})


