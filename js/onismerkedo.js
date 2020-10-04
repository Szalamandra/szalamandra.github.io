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

let stickyIkonok = "";

function menuEloHoz() {
  if (mobilMenu.classList.contains("navZarva")) {
    hambicsikMozog();
  } else hambicsikMozogVissza();
}

function hambicsikMozog() {
  if (
    hambiGomb.classList.contains(
      "animacioXVissza"
    )
  ) {
    hambiGomb.classList.replace(
      "animacioXVissza",
      "animacioX"
    );
  } else {
    hambiGomb.classList.add("animacioX");
  }
  mobilMenu.classList.replace(
    "navZarva",
    "navOpen"
  );
}

function hambicsikMozogVissza() {
  hambiGomb.classList.replace(
    "animacioX",
    "animacioXVissza"
  );
  mobilMenu.classList.replace(
    "navOpen",
    "navZarva"
  );
}

function lathato() {
  let ablakmeret = window.scrollY;
  if (ablakmeret > 200) {
    stickyIkonok.style.visibility = "visible";
  }
}

//innen a formnak a validatione
let gomb = "";
let fromControl = "";
let formInput = "";
function formValid() {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let jo = 0;

  if (
    formInput[0].value.trim() === "" ||
    formInput[0].value.trim() == null
  ) {
    formControl[0].classList.toggle("failed");
    if (
      formControl[0].classList.contains("success")
    )
      formControl[0].classList.replace(
        "success",
        "failed"
      );
  } else {
    formControl[0].classList.toggle("success");
    jo++;
    if (
      formControl[0].classList.contains("failed")
    )
      formControl[0].classList.replace(
        "failed",
        "success"
      );
  }

  if (!regex.test(formInput[1].value.trim())) {
    formControl[1].classList.toggle("failed");
  } else {
    formControl[1].classList.toggle("success");
    jo++;
  }
  if (jo >= 2) return true;
  else {
    return preventDefault();
  }
}
function init() {
  mobilMenu = $("#navbar>nav");
  hambicsikTomb = $tomb("div.hambicsik");

  hambiGomb = $("#hambi");

  gomb = $("#gomb");
  //formhoz
  formInput = $tomb(".form-control input");
  formControl = $tomb(".form-control");

  console.log(formInput[0].value.trim());
  //esemenykezelők
  hambiGomb.addEventListener(
    "click",
    menuEloHoz,
    false
  );
  gomb.addEventListener(
    "click",
    formValid,
    false
  );
  stickyIkonok = $(".stickyIkonok");
  window.addEventListener(
    "scroll",
    lathato,
    false
  );

  //var kep=$('kep');
  //kep.addEventListener('click', kepbetolt, false);
}

window.addEventListener("load", init, false);
