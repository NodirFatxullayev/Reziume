let item = document.querySelector(".item");
let rejim = document.querySelector(".rejim");

let n = 0;

rejim.addEventListener("click", () => {
    n++;
    if(n === 1 || n % 2 !== 0){
        item.style.transform = `translate(${14}px, 0)`
    }
    else{
        item.style.transform = `translate(${0}px, 0)`
    }
})