let count = 0;
let countEL = document.getElementById('count-el');
let parent = document.getElementById('pass');
function increment(){
  count ++;
  countEL.textContent = count;
}
// function save(){
//   let parent = document.getElementById('pass');
//   let saveCount = document.createElement("p");
//   saveCount.innerHTML =" - " + count + "&nbsp;";
//   parent.appendChild(saveCount);
// }
function save() {
  let countPrint = count + " - ";
  parent.textContent += countPrint;
  count = 0;
  countEL.textContent = count;
}
