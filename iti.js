function display(element){
    let content = element.nextElementSibling;
    if(content.style.display==="none"){
        content.style.display="block";
    }
    else{
        content.style.display="none";
    }
}

//Benefits
let benefits = document.querySelector(".benefits");
let benefitsinfo = document.querySelector(".content3");
let benefitstitle= document.querySelector(".benefits h2");

benefitstitle.addEventListener("click", ()=>{
    if(benefitsinfo.style.display==="none"){
        benefitsinfo.style.display="block";
    }
    else{
        benefitsinfo.style.display="none";
    }
});
//time
let time = document.querySelector(".time");
let timeinfo = document.querySelector(".content5");
let timetitle= document.querySelector(".time h2");

timetitle.addEventListener("click", ()=>{
    if(timeinfo.style.display==="none"){
        timeinfo.style.display="block";
        time.style.maxWidth= "80%";
    }
    else{
        timeinfo.style.display="none";
        time.style.maxWidth= "100%";
    }
});