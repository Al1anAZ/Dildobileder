"use strict";
//-----------------------------------------Dom variables
const ExtraServices = document.getElementById(`ExtraServices`);
const ShowOrHideExtraServButton = document.getElementById(`ShowOrHideExtraServButton`);
const Moretext = document.getElementById(`Moretext`);
const BurgerTogle = document.getElementById(`menu__toggle`);
const Header = document.querySelector('nav');
//-------------------------------------------ExtraServices animation---------------------------
ShowOrHideExtraServButton.addEventListener("transitionend", () => {
    if (ExtraServices.style.height !== "0px") {
        ExtraServices.style.height = "auto"
    }
});
//-------------------------------------------ExtraServices animation/hide extratext/rotate img on extrabutton---------------------------
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
//-------------------------------------------Change Header(on burger button click)---------------------------
BurgerTogle.addEventListener(`click`, ()=>{
   if(BurgerTogle.checked)
   Header.setAttribute(`data-change-header`, `moved`);
      
})
//-------------------------------------------Change Header(when scrolling)----------------------------------
window.addEventListener(`scroll`, () =>{
    (document.documentElement.scrollTop > 0) ? Header.setAttribute(`data-change-header`, `moved`) : Header.setAttribute(`data-change-header`, `static`);
    if(BurgerTogle.checked )
    Header.setAttribute(`data-change-header`, `moved`)

});
