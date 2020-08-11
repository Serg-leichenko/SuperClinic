let btnKey1 = document.getElementById('btnKey1');
let btnKey2 = document.getElementById('btnKey2');
let btnKey3 = document.getElementById('btnKey3');
let details_1 = document.getElementById('details_1');
let details_2 = document.getElementById('details_2');
let details_3 = document.getElementById('details_3');

btnKey1.addEventListener("click", () => {
  details_1.style.display = "flex";
  if(details_1.style.display = "flex") {
    details_2.style.display = "none";
    details_3.style.display = "none"
  }
})

btnKey2.addEventListener("click", () => {
  details_2.style.display = "flex";
  if(details_2.style.display = "flex") {
    details_1.style.display = "none";
    details_3.style.display = "none"
  }
})

btnKey3.addEventListener("click", () => {
  details_3.style.display = "flex";
  if(details_3.style.display = "flex") {
    details_1.style.display = "none";
    details_2.style.display = "none"
  }
})
