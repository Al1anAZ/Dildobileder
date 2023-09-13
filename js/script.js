"use strict";
window.addEventListener(`scroll`, () =>{
    let Header = document.querySelector('.HeaderContainer');
    (document.documentElement.scrollTop > 0) ? Header.style.backgroundColor = "rgba(35, 31, 32, 0.95)" : Header.style.backgroundColor = "transparent";
});
let ExtraServicesCheck = true;
// function ShowOrHideExtraServices(){
//     if(ExtraServicesCheck){
//         document.getElementById(`ExtraServices`).style.transition = `opacity 1s`
//         document.getElementById(`ExtraServices`).style.opacity  = 1;
//         document.getElementById(`ExtraServices`).style.height = `auto`;
//         document.getElementById(`Moretext`).style.display = `none`;
//         document.getElementById(`ShowOrHideExtraServButton`).style.transform = `rotate(180deg)`;
//         ExtraServicesCheck = false;
//     }
//     else{
//         document.getElementById(`ExtraServices`).style.transition = `opacity 0s`
//         document.getElementById(`ExtraServices`).style.opacity  = 0;
//         document.getElementById(`ExtraServices`).style.height = `0`;
//         document.getElementById(`Moretext`).style.display = `block`;
//         document.getElementById(`ShowOrHideExtraServButton`).style.transform = `rotate(0)`;
//         ExtraServicesCheck = true;
//     }
    
// }
const ExtraServices = document.getElementById(`ExtraServices`);
const ShowOrHideExtraServButton = document.getElementById(`ShowOrHideExtraServButton`);
const Moretext = document.getElementById(`Moretext`);
ShowOrHideExtraServButton.addEventListener("transitionend", () => {
    if (ExtraServices.style.height !== "0px") {
        ExtraServices.style.height = "auto"
    }
});
ShowOrHideExtraServButton.addEventListener("click", () => {
    if (ExtraServices.style.height === "0px") {
        ExtraServices.style.height = `${ ExtraServices.scrollHeight }px`;
        ExtraServices.style.opacity =  1;
        ShowOrHideExtraServButton.style.transform = `rotate(180deg)`;
        Moretext.style.display = `none`;
    } 
    else {
        ExtraServices.style.height = `${ ExtraServices.scrollHeight }px`;
        window.getComputedStyle(ExtraServices, null).getPropertyValue("height");
        ExtraServices.style.height = "0";
        ExtraServices.style.opacity =  0;
        ShowOrHideExtraServButton.style.transform = `rotate(0)`;
        Moretext.style.display = `block`;
    }
});
