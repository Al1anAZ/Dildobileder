"use strict";
let ExtraServices = document.getElementById(`ExtraServices`);
const ShowOrHideExtraServButton = document.getElementById(`ShowOrHideExtraServButton`);
const Moretext = document.getElementById(`Moretext`);
const BurgerTogle = document.getElementById(`menu__toggle`);
const Header = document.querySelector('nav');
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
        Moretext.hidden = true;
    } 
    else {
        ExtraServices.style.height = `${ ExtraServices.scrollHeight }px`;
        window.getComputedStyle(ExtraServices, null).getPropertyValue("height");
        ExtraServices.style.height = 0;
        ExtraServices.style.opacity =  0;
        ShowOrHideExtraServButton.style.transform = `rotate(0)`;
        Moretext.hidden = false;
    }
});
BurgerTogle.addEventListener(`click`, ()=>{
   if(BurgerTogle.checked)
   Header.setAttribute(`data-change-header`, `moved`);
      
})
window.addEventListener(`scroll`, () =>{
    (document.documentElement.scrollTop > 0) ? Header.setAttribute(`data-change-header`, `moved`) : Header.setAttribute(`data-change-header`, `static`);
    if(BurgerTogle.checked )
    Header.setAttribute(`data-change-header`, `moved`)

});