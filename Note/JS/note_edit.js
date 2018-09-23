let i;

function viewNote(el) {
    let ul, li, title, description;

    // get index of the notes
    i = 0;
    while (el.previousElementSibling) {
        el = el.previousElementSibling;
        i++;
    } 
    //console.log(i);

    // get elements from clicked list
    ul = document.getElementById("noteList");
    li = ul.getElementsByTagName('li');
    title = li[i].getElementsByClassName('notes_Title')[0];
    description = li[i].getElementsByClassName('notes_Description')[0];

    // display to Notes side
    document.getElementById('noteTitle').value = title.textContent;
    document.getElementById('noteDescription').value = description.textContent;

    // show btn
    document.getElementById('editBtn').style.display = "inline";
    document.getElementById('removeBtn').style.display = "inline";
}

function editNote() {
    let ul, li, title, description;
    // get edited title and description
    title = document.getElementById('noteTitle').value;
    description = document.getElementById('noteDescription').value;

    if (title === "" || description === "") {
        alert("I want to 'write' someting!");
        return;
    }

    // get elements from clicked list
    ul = document.getElementById("noteList");
    li = ul.getElementsByTagName('li');
    li[i].getElementsByClassName('notes_Title')[0].textContent = title;
    li[i].getElementsByClassName('notes_Description')[0].textContent = description;

    // empty
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteDescription').value = '';

    // hide btn
    document.getElementById('editBtn').style.display = "none";
    document.getElementById('removeBtn').style.display = "none";

}

function removeNote() {
    let ul, li;
    ul = document.getElementById("noteList");
    li = ul.getElementsByTagName('li');

    // Remove
    ul.removeChild(li[i]);

    // empty
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteDescription').value = '';

    // hide btn
    document.getElementById('editBtn').style.display = "none";
    document.getElementById('removeBtn').style.display = "none";
}



