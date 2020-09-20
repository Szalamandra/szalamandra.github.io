function $(queryselector) {
    return document.querySelector(queryselector);
}
function $tomb(queryselector) {
    return document.querySelectorAll(queryselector);
}

let mobilMenu = "";
let hambiGomb = "";
let hambicsikTomb = "";
let menuElol = false;

function menuEloHoz() {
    if (mobilMenu.classList.contains("navZarva")) {
        hambicsikMozog();
    } else hambicsikMozogVissza();
}

function hambicsikMozog() {

    if (
        hambiGomb.classList.contains(
            "animacioXVissza"
        )) {

        hambiGomb.classList.replace(
            "animacioXVissza",
            "animacioX"
        );
    }
    else {
        hambiGomb.classList.add("animacioX");

    }
    mobilMenu.classList.replace("navZarva", "navOpen")
}

function hambicsikMozogVissza() {
    hambiGomb.classList.replace(
        "animacioX",
        "animacioXVissza"
    );
    mobilMenu.classList.replace("navOpen", "navZarva");
}

function init() {
    mobilMenu = $(
        "#navbar>nav");
    hambicsikTomb = $tomb("div.hambicsik");

    hambiGomb = $("#hambi");

    console.log(mobilMenu);
    //esemenykezelők
    hambiGomb.addEventListener(
        "click",
        menuEloHoz,
        false
    );

    //var kep=$('kep');
    //kep.addEventListener('click', kepbetolt, false);
}

window.addEventListener("load", init, false);
