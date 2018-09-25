let list = document.getElementById('noteList');
let i;
let noteList = [];
let response = [];

class Note {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    get_name() {
        return this.name;
    }

    get_description() {
        return this.description;
    }
}


class NoteComponent {
    constructor() {}

    addNote(name, description) {
        if (name === "" || description === "") {
            alert("I want to 'write' someting!");
            return;
        }

        //console.log(name);
        //console.log(description);

        // append to noteList
        noteList.push(new Note(name, description));

        // DOM to <li> - p - p - </li>
        let newList = document.createElement("LI");
        let newName = document.createElement("P");
        let newDescription = document.createElement("P");

        // set function
        newList.setAttribute("onclick", "viewNote(this)");

        // append name
        newName.setAttribute("class", "notes_Title"); // set id
        newList.appendChild(newName);
        newName.appendChild(document.createTextNode(name));

        // append description
        newDescription.setAttribute("class", "notes_Description"); // set id
        newList.appendChild(newDescription);
        newDescription.appendChild(document.createTextNode(description));

        //console.log(newList);

        // append to list
        list.appendChild(newList);

        //console.log(noteList);

        // empty
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteDescription').value = '';
    }

    viewNote(el) {
        // get index of the notes
        i = 0;
        while (el.previousElementSibling) {
            el = el.previousElementSibling;
            i++;
        }

        // display to Notes side
        document.getElementById('noteTitle').value = noteList[i].get_name();
        document.getElementById('noteDescription').value = noteList[i].get_description();

        // show btn
        document.getElementById('editBtn').style.display = "inline";
        document.getElementById('removeBtn').style.display = "inline";
    }

    editNote() {
        let name, description, ul, li;
        // get edited title and description
        name = document.getElementById('noteTitle').value;
        description = document.getElementById('noteDescription').value;

        if (name === "" || description === "") {
            alert("I want to 'write' someting!");
            return;
        }

        // get elements from clicked list
        ul = document.getElementById("noteList");
        li = ul.getElementsByTagName('li');
        li[i].getElementsByClassName('notes_Title')[0].textContent = name;
        li[i].getElementsByClassName('notes_Description')[0].textContent = description;

        noteList[i].name = name;
        noteList[i].description = description;

        // empty
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteDescription').value = '';

        // hide btn
        document.getElementById('editBtn').style.display = "none";
        document.getElementById('removeBtn').style.display = "none";

    }

    removeNote() {
        let ul, li;
        ul = document.getElementById("noteList");
        li = ul.getElementsByTagName('li');

        // Remove
        ul.removeChild(li[i]);

        // remove from array
        noteList.splice(i, 1);

        // empty
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteDescription').value = '';

        // hide btn
        document.getElementById('editBtn').style.display = "none";
        document.getElementById('removeBtn').style.display = "none";
    }

    search() {
        let input, filter, ul, li, title, description, i;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("noteList");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            title = li[i].getElementsByClassName('notes_Title')[0];
            description = li[i].getElementsByClassName('notes_Description')[0];
            if ((title.innerHTML.toUpperCase().indexOf(filter) > -1) || (description.innerHTML.toUpperCase().indexOf(filter) > -1)) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    // take a noteList and query, and returns a list of filtered by the same title and query parameter
    filterList(noteList, query) {
        response=[];
        let filter, name;
        filter = query.toUpperCase();

        for (i = 0; i < noteList.length; i++) {
            name = noteList[i].get_name();
            if ( name.toUpperCase().indexOf(filter) > -1 ) {
                response.push(new Note(noteList[i].get_name(), noteList[i].get_description()));
            }
        }
        return response;
    }

}
let note = new NoteComponent();

function addNote() {
    // get notes elements
    let name = document.getElementById('noteTitle').value;
    let description = document.getElementById('noteDescription').value;
    note.addNote(name, description);
}

function viewNote(el) {
    note.viewNote(el);
}

function editNote() {
    note.editNote();
}

function removeNote() {
    note.removeNote();
}

function search() {
    note.search();
}

