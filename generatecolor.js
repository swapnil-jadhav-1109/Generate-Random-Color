let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    console.log("button is clicked");
    let h3 = document.querySelector("h3");
    let randomcolor = getrandom();
   h3.innerText = randomcolor;

   let div = document.querySelector("div");
   div.style.backgroundColor = randomcolor;


})

  function getrandom(){
   let red = Math.floor(Math.random()*255);
   let green = Math.floor(Math.random()*255);
   let blue = Math.floor(Math.random()*255);
   let color = `rgb(${red},${green},${blue})`;
   return color;
 }
