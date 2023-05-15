const title = document.getElementById("title");
const note = document.getElementById("note");
let selectColor;
const pink = document.querySelector("#pink");
const saveBtn = document.querySelector(".saveBtn")
const cards = document.querySelector(".cards");


function changeColor(color){
    selectColor = color;
    document.textContent ="sa"
} 

saveBtn.addEventListener("click", ()=>{
    const newDivItem = document.createElement("div");
    newDivItem.innerHTML=`
    <h4 class="newcard_h4">${title.value}</h4>
    <p>${note.value}</p>
    `
    cards.append(newDivItem);
    const newcard_h4 = document.querySelector(".newcard_h4");
    newcard_h4.style.backgroundColor = selectColor;
    const lastCard = cards.lastChild;
    lastCard.style.borderColor = selectColor
    resetContent();

})

function resetContent(){
    title.value='';
    note.value='';
}
