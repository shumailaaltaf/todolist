let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputFileld = document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    // paragraph.classList = add('paragraph-styling');
    paragraph.innerText = inputFileld.value;
    toDoContainer.appendChild(paragraph);
    inputFileld.value = "";
    paragraph.addEventListener('click',function(){
paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
})
})


