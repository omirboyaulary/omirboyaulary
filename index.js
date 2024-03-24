const buttons = document.querySelectorAll(".btn");
const collapses = document.querySelectorAll(".collapse");
let original = "";
var originalContent = document.getElementById("mazmuny").innerHTML;
var originalContentofModule1 = document.getElementById("dropdown2").innerHTML;
var originalContentofErtegi1 = document.getElementById("dropdown5").innerHTML;
var originalContentofErtegi4 = document.getElementById("dropdown8").innerHTML;
var originalContentofErtegi6 = document.getElementById("dropdown10").innerHTML;
var originalContentofErtegiModule5 = document.getElementById("dropdown19").innerHTML;
var originalContentofErtegiModule51 = document.getElementById("dropdown21").innerHTML;
var originalContentofErtegiModule24 = document.getElementById("dropdown24").innerHTML;
var originalContentofErtegiModule26 = document.getElementById("dropdown26").innerHTML;
var originalContentofErtegiModule27 = document.getElementById("dropdown27").innerHTML;
var originalContentofErtegiModule31 = document.getElementById("dropdown31").innerHTML;
var originalContentofErtegiModule35 = document.getElementById("dropdown35").innerHTML;
var originalContentofErtegiModule34 = document.getElementById("dropdown34").innerHTML;



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    collapses.forEach((collapse) => {
      if (collapse.id !== button.getAttribute("data-bs-target").slice(1)) {
        collapse.classList.remove("show");
      }
    }); 
  });
});
function saveModules(){
 // var originalContentofModule1 = document.getElementsByClassName("ahaha");
  //console.log(originalContentofModule1.innerHTML);
}

function toggleDropdown(dropdownId) {
  var cardbody = document.getElementById("mazmuny");
  var dropdown = document.getElementById(dropdownId);
  var dropdowns = document.querySelectorAll("dropdown-content");
  mazmuny.innerHTML = dropdownId.innerHTML; 
}

function toggleCollapse(targetId) {
    var targetCollapse = document.getElementById(targetId); // Найти целевое окно по его id
    // Закрыть или открыть целевое окно
    targetCollapse.classList.toggle('show');
}



function getold() {
        // Возврат к исходному содержимому mazmuny при нажатии на "Артқа"
        document.getElementById("mazmuny").innerHTML = originalContent;
    }
function getoldModules() {
      // Возврат к исходному содержимому mazmuny при нажатии на "Артқа"
      document.getElementById("mazmuny").innerHTML = originalContentofModule1;
}

function getBackZadanie1(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegi1;
}

function getBackZadanie4(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegi4;
}
function getBackZadanie6(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegi6;
}
function getBackOin5(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegiModule5;
}
function getBackOin51(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegiModule51;
}
function getBackOin24(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegiModule24;
}
function getBackOin26(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegiModule26;
}
function getBackOin27(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegiModule27;
}
function getBackOin31(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegiModule31;
}
function getBackOin35(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegiModule35;
}
function getBackOin34(){
  document.getElementById("mazmuny").innerHTML = originalContentofErtegiModule34;
}


