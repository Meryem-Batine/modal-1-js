let open_btn=document.querySelector(".open-btn");
let div_modal=document.querySelectorAll(".div.modal");
let close_btn=document.querySelector(".close-btn");
let myBody=document.body;

let btn =open_btn.getAttribute("id");
console.log(btn);

const openModal =(div)=>{
    div.classList.remove("no-show");
    myBody.classList.add("body-modal-open");
}

const closModal =()=>{
    div.classList.add("no-show");
    myBody.classList.remove("body-modal-open");
}

for (let index = 0; index < open_btn.length; index++) {
    let btnElentOpen = open_btn[index];
    let idBtnOpen =  btnElentOpen.getAttribute("id");
}
for (let index = 0; index < div_modal.length; index++) {
    let divElement = div_modal[index];
    let idDiv = divElement.getAttribute("id");
}
open_btn.addEventListener("click",()=>{
    openModal(div_modal)
})