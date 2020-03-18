let btn = document.getElementById('main-btn');
let popup = document.getElementById('popup');
let close = document.getElementById('close');
let listItem = document.getElementsByClassName('circle-container');
let completed = document.getElementById('completed');
let addToDo = document.getElementById('ip2');
let completed_list = document.getElementById('completed_list');
let textvalue2 = document.getElementById('text-value');



btn.onclick = () => {
    popup.style.display = 'block';
    textvalue2.value = ''


}

close.onclick = () => {
    popup.style.display = 'none';

}



for (let i = 0; i < listItem.length; i++) {
    listItem[i].onclick = function() {
        if (this.getAttribute('data-attr') == 'undone') {
            this.childNodes[1].style.display = 'none';
            this.childNodes[3].style.display = 'inline';
            this.setAttribute('data-attr', 'done');


            //move done task to completed tasks
            window.todo_timeout = setTimeout(function(elem_id) {
                listItem[elem_id].parentNode.style.display = 'none';
                completed_list.innerHTML = completed_list.innerHTML + "<li>" + listItem[elem_id].parentNode.innerHTML + "</li>";
                completed_list.lastElementChild.setAttribute('data-attr-todo-id', elem_id);
                completed_list.lastElementChild.scrollIntoView(false);
                completed_list.lastElementChild.onclick = function() {
                    listItem[this.getAttribute('data-attr-todo-id')].parentNode.style.display = 'block';

                }
            }, 1000, i);
        } else {
            this.childNodes[1].style.display = 'inline';
            this.childNodes[3].style.display = 'none';
            this.setAttribute('data-attr', 'undone');
            clearTimeout(window.todo_timeout);
        }
    }
};


addToDo.onclick = function() {
    let textValue = document.getElementById('text-value').value;
    let todoList = document.getElementById('ul');


    let todoLiElement = document.createElement('li');
    let todoSpanElement = document.createElement('span');
    let todoUndoneElement = document.createElement('i');
    let todoDoneElement = document.createElement('i');
    let todoTextElement = document.createElement('p');
    let todoTextNode = document.createTextNode(textValue);
    if (textValue.length < 2) {
        return false
    }

    // append text node to p element
    todoTextElement.appendChild(todoTextNode);
    todoTextElement.setAttribute('class', 'dos');

    //add claasses to undone icon
    todoUndoneElement.setAttribute('class', 'far fa-circle circle');
    todoSpanElement.appendChild(todoUndoneElement);

    // add classes to done icon
    todoDoneElement.setAttribute('class', 'far fa-check-circle done');
    todoDoneElement.style.display = 'none';
    todoSpanElement.appendChild(todoDoneElement);

    //set attributes and class to span
    todoSpanElement.setAttribute('class', 'circle-container');
    todoSpanElement.setAttribute('data-attr', 'undone');

    // append all child element to list element
    todoLiElement.append(todoSpanElement);
    todoLiElement.append(todoTextElement);

    todoList.appendChild(todoLiElement);

}

addToDo.addEventListener('click', function() {
    if (popup.style.display === 'none') {
        popup.style.display = 'block'

    } else {
        popup.style.display = 'none'
    }
})