const b = document.querySelector("button,.button2")
b.addEventlister("mouseover", moveHover)

 function moveHover(){
    const i=Math.floor(Math,random(+500)+1
    const j=Math.floor(Math,random()+500)+1 ;

    b.style.left=i+"px"
    b.style.top=j+"px"
 }