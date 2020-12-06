let entryField = document.querySelector("#entryField"); 
let inputRange = document.querySelector("#inputRange"); 
let scaleRate = document.querySelector("#scaleRate"); 
let scalePercent = document.querySelector("#scalePercent"); 

inputRange.addEventListener("input", moveCostTable)
inputRange.addEventListener("input", moveСommissionTable)
entryField.addEventListener("input", moveCostTable)
entryField.addEventListener("input", moveСommissionTable)

function moveCostTable (event) {
  inputRange.value = event.target.value;
  entryField.value = event.target.value;
  scaleRate.style.height = inputRange.value + 'px';
} 

function moveСommissionTable () {
  (inputRange.value < 20) ? scalePercent.style.height = 2 + 'px':
  (inputRange.value < 50) ? scalePercent.style.height = 4 + 'px':
  (inputRange.value < 75) ? scalePercent.style.height = 6 + 'px':
  (inputRange.value >= 75) ? scalePercent.style.height = 8 + 'px': false;
}