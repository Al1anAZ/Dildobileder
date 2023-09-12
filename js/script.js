"use strict";
window.addEventListener(`scroll`, () =>{
    let Header = document.querySelector('.HeaderContainer');
    (document.documentElement.scrollTop > 0) ? Header.style.backgroundColor = "rgba(35, 31, 32, 0.95)" : Header.style.backgroundColor = "transparent";
});
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
