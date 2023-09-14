"use strict";
const ExtraServices = document.getElementById(`ExtraServices`);
const ShowOrHideExtraServButton = document.getElementById(`ShowOrHideExtraServButton`);
const Moretext = document.getElementById(`Moretext`);
const BurgerTogle = document.getElementById(`menu__toggle`);
const Header = document.querySelector('.HeaderContainer');
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
BurgerTogle.addEventListener(`click`, ()=>{
   BurgerTogle.checked ? Header.style.backgroundColor = "rgba(35, 31, 32, 0.95)" : false;
      
})
window.addEventListener(`scroll`, () =>{
    (document.documentElement.scrollTop > 0) ? Header.style.backgroundColor = "rgba(35, 31, 32, 0.95)" : Header.style.backgroundColor = "transparent";
    if(BurgerTogle.checked )
      Header.style.backgroundColor = "rgba(35, 31, 32, 0.95)"

});