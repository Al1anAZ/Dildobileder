"use strict";

window.addEventListener(`scroll`, () =>{
    let Header = document.querySelector('.HeaderContainer');
    (document.documentElement.scrollTop > 0) ? Header.style.backgroundColor = "rgba(35, 31, 32, 0.95)" : Header.style.backgroundColor = "transparent";
});



function OurServicesLineChangeSize(){
        let windowWidth = window.innerWidth;
        let OurServicesLine = document.getElementById(`OurServicesLINE`);
        windowWidth<450 ? OurServicesLine.style.maxWidth = `300px` : OurServicesLine.style.maxWidth = `400px`;       
}

function ChangeFooterElements(){
    let windowWidth = window.innerWidth;
    let FooterNavigation = document.querySelector(`.FooterNavigation`);
    let FooterLolgo = document.getElementById(`MarginFooterLogo`);
    let FooterText = document.getElementById(`MarginFooterText`);
    let FooterButton = document.getElementById(`FooterButton`);
    (windowWidth<=1423) ? FooterNavigation.style.display = `none` : FooterNavigation.style.display = `block`;
    if(windowWidth<=1024){
        FooterLolgo.style.margin = `auto`;
        FooterText.style.margin = `auto`;
        FooterText.style.textAlign = `center`;
        FooterButton.style.display = `none`;
        
    }
    else{
        FooterButton.style.display = `block`;
        FooterLolgo.style.margin = `0`;
        FooterText.style.margin = `0`;
    }

}

let ExtraServicesCheck = true;
function ShowOrHideExtraServices(){
    if(ExtraServicesCheck){
        document.getElementById(`ExtraServices`).style.display = `flex`;
        document.getElementById(`Moretext`).style.display = `none`;
        document.getElementById(`ShowOrHideExtraServButton`).style.transform = `rotate(180deg)`;
        ExtraServicesCheck = false;
    }
    else{
        document.getElementById(`ExtraServices`).style.display = `none`;
        document.getElementById(`Moretext`).style.display = `block`;
        document.getElementById(`ShowOrHideExtraServButton`).style.transform = `rotate(0)`;
        ExtraServicesCheck = true;
    }
}

window.addEventListener(`resize`,ChangeFooterElements)
window.addEventListener(`resize`,OurServicesLineChangeSize)

ChangeFooterElements();
OurServicesLineChangeSize();