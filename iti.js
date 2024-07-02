//About IT
let aboutit = document.querySelector(".aboutit");
let aboutitinfo = document.querySelector(".content1");
let aboutittitle= document.querySelector(".aboutit h2");

aboutittitle.addEventListener("click", ()=>{
    if(aboutitinfo.style.display==="none"){
        aboutitinfo.style.display="block";
    }
    else{
        aboutitinfo.style.display="none";
    }
});
//About CS
let aboutcs = document.querySelector(".aboutcs");
let aboutcsinfo = document.querySelector(".content2");
let aboutcstitle= document.querySelector(".aboutcs h2");

aboutcstitle.addEventListener("click", ()=>{
    if(aboutcsinfo.style.display==="none"){
        aboutcsinfo.style.display="block";
    }
    else{
        aboutcsinfo.style.display="none";
    }
});
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
    title.addEventListener("mouseover", ()=>{
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
        time.style.maxWidth = "80%";
    } else {
        timeinfo.style.display="none";
        time.style.maxWidth = "100%";
    }
});
//College
let college = document.querySelector(".college");
let collegeinfo = document.querySelector(".content7");
let collegetitle= document.querySelector(".college h2");

collegetitle.addEventListener("click", ()=>{
    if(collegeinfo.style.display==="none"){
        collegeinfo.style.display="block";
    } else {
        collegeinfo.style.display="none";
    }
});