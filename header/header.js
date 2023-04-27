let item = document.querySelector(".item");
let rejim = document.querySelector(".rejim");
let header = document.querySelector(".header");
let body = document.querySelector("body");
let home = document.querySelector(".home");
let skill = document.querySelector(".skill");
let h2 = document.querySelector(".h2");

let n = 0;

rejim.addEventListener("click", () => {
    n++;
    if(n === 1 || n % 2 !== 0){
        item.style.transform = `translate(${14}px, 0)`;
        header.style.backgroundColor = "#a1a1a1";
        body.style.backgroundColor = "#fff";
        home.style.backgroundColor = "#f1f1f1";
        skill.style.background = `linear-gradient(to bottom, #f1f1f1 60%, #8739fa)`;
        h2.style.color = "black";
    }
    else{
        item.style.transform = `translate(${0}px, 0)`;
        header.style.backgroundColor = "#151418";
        body.style.backgroundColor = "#414141";
        home.style.backgroundColor = "#151418";
        skill.style.background = `linear-gradient(to bottom, #151418 60%, #8739fa)`;
        h2.style.color = "#fff";
    }
});

let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");
let text7 = document.querySelector("#text7");
let text8 = document.querySelector("#text8");
let text9 = document.querySelector("#text9");
let text10 = document.querySelector("#text10");
let text11 = document.querySelector("#text11");
let text12 = document.querySelector("#text12");
let text13 = document.querySelector("#text13");
let text14 = document.querySelector("#text14");
let text15 = document.querySelector("#text15");
let text16 = document.querySelector("#text16");
let text17 = document.querySelector("#text17");
let text18 = document.querySelector("#text18");
let text19 = document.querySelector("#text19");
let text20 = document.querySelector("#text20");
let text21 = document.querySelector("#text21");
let text22 = document.querySelector("#text22");
let text23 = document.querySelector("#text23");

