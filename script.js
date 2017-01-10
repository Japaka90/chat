var box = document.getElementById('box');
var butt = document.getElementById('button');

butt.addEventListener('click', readText);

// функция создания блока с текстом из окна ввода
function readText(){
    var textarea = document.getElementById('textarea');
    var newElem = newElement('div', 'elem_item', textarea.value);
    relation (box, newElem);
    textarea.value = '';
    var exit = newElement('div', 'exit', '');
    relation (newElem, exit)
};

// для удаления элемента
box.addEventListener('click', function(){
    if (event.target.className == 'exit') {  
        box.removeChild(event.target.parentNode)      
    }
});

// доп функция для создания нового элемента
 function newElement(tag, attr, text) {
     var elem = document.createElement(tag);
     elem.className = attr;
     var elemText = document.createTextNode(text);
     elem.appendChild(elemText);
     return elem
}

//доп функция для родительских связей 
function relation (parent, child) { 
    parent.appendChild(child);    
}

// родительский элемент
//function getRoot(id) {
//    return document.getElementById(id)
//}
