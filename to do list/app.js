let localStorageObject = JSON.parse(localStorage.getItem("todolist"));
var items = [];
if (localStorageObject != null) {
    items = localStorageObject;
}

var list = document.querySelector('#list');

items.forEach(function (item) {
    createItem(item);
});

list.addEventListener('click', function (item) {

    if (item.target.tagName = 'li') {
        item.target.classList.toggle('checked')
    }

});

function newElement() {
    var item = document.querySelector('#task').value;

    if (item === '') {
        alertify.set('notifier', 'position', 'top-center');
        alertify.warning('Listeye boş eleman ekleme yapamazsınız !');

        return;
    }
    createItem(item);
    alertify.set('notifier', 'position', 'top-right');
    alertify.success('Listeye eklendi');

    localStorage.setItem("todolist", JSON.stringify(items))
}


function createItem(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className = 'list-group-item';
    li.appendChild(t);
    list.appendChild(li);
    items.push(item);
    var span = document.createElement('span');
    var text = document.createTextNode('x');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none';
    }

}

