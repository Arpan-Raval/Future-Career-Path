//Benefits
let benefits = document.querySelector(".benefits");
let benefitsinfo = document.querySelector(".content3");
let benefitstitle= document.querySelector(".benefits h2");

benefitstitle.addEventListener("click", ()=>{
    if(benefitsinfo.style.display==="none"){
        benefitsinfo.style.display="block";
        benefitstitle.setAttribute("id","bAfter-h2")
    }
    else{
        benefitsinfo.style.display="none";
        benefitstitle.setAttribute("id","b-h2")
    }
});
//Career
let career = document.querySelector(".career");
let careerinfo = document.querySelector(".content4");
let careertitle= document.querySelector(".career h2");


careertitle.addEventListener("click", ()=>{
    if(careerinfo.style.display==="none"){
        careerinfo.style.display="block";
    }
    else{
        careerinfo.style.display="none";
    }
});

let title = document.querySelectorAll("#h1");
let image = document.querySelectorAll("#img");
let list = document.querySelectorAll("#li");

title.forEach((title,index)=>{
    title.addEventListener("click", ()=>{
        if(image[index].id==="img"){
            image[index].setAttribute("id","img2");
            list[index].setAttribute("id","li2");
        }
        else{
            image[index].setAttribute("id","img");
            list[index].setAttribute("id","li");
        }
    });
});
//Exam
let exam = document.querySelector(".exam");
let examinfo = document.querySelector(".content5");
let examtitle= document.querySelector(".exam h2");

examtitle.addEventListener("click", ()=>{
    if(examinfo.style.display==="none"){
        examinfo.style.display="block";
    }
    else{
        examinfo.style.display="none";
    }
});
//time
let time = document.querySelector(".time");
let timeinfo = document.querySelector(".content6");
let timetitle= document.querySelector(".time h2");

timetitle.addEventListener("click", ()=>{
    if(timeinfo.style.display==="none"){
        timeinfo.style.display="block";
        time.style.maxWidth = "90%";
    } else {
        timeinfo.style.display="none";
        time.style.maxWidth = "100%";
    }
});
//College
let college = document.querySelector(".college");
let collegeinfo = document.querySelector(".content7");
let collegetitle= document.querySelector(".college h2");
let collegename= document.querySelectorAll(".college-name");
let collegelink=document.querySelectorAll("a");

collegetitle.addEventListener("click", ()=>{
    if(collegeinfo.style.display==="none"){
        collegeinfo.style.display="block";
    } else {
        collegeinfo.style.display="none";
    }
});

collegename.forEach((collegename, index)=>{
    collegename.addEventListener("mouseover", ()=>{
        collegename.style.backgroundColor="rgb(71, 178, 227)";
        collegelink[index].style.color="white";
    });

    collegename.addEventListener("mouseout", ()=>{
        collegename.style.backgroundColor="white";
        collegelink[index].style.color="black";
    });

});

//Inspect
document.addEventListener("contextmenu",function(event){
    alert("Right-clicking has been disabled by Mr. Arpan Raval, the developer.");
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    // Disable F12
    if (event.keyCode == 123) {
        event.preventDefault();
    }
    // Disable Ctrl+Shift+I
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
       event.preventDefault();
    }
    // Disable Ctrl+Shift+J
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
        event.preventDefault();
    }
    // Disable Ctrl+U
    else if (event.ctrlKey && event.keyCode == 85) {
       event.preventDefault();
    }
});