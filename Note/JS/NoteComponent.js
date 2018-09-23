class NoteComponent {
    constructor(name, description) {
        this.name = name;
        this.description = description
    }

    newNote(name, description) {
        // get title and description
        let title = name;
        let description = description;

        if (title === "" || description === "") {
            alert("I want to 'write' someting!");
            return;
        }

        //console.log(title);
        //console.log(description);

        // DOM to <li> - p - p - </li>
        let newList = document.createElement("LI");
        let newTitle = document.createElement("P");
        let newDescription = document.createElement("P");

        // set function
        newList.setAttribute("onclick", "viewNote(this)");

        // append title
        newTitle.setAttribute("class", "notes_Title"); // set id
        newList.appendChild(newTitle);
        newTitle.appendChild(document.createTextNode(title));

        // append description
        newDescription.setAttribute("class", "notes_Description"); // set id
        newList.appendChild(newDescription);
        newDescription.appendChild(document.createTextNode(description));

        //console.log(newList);

        // append to list
        list.appendChild(newList);

        // empty
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteDescription').value = '';
    }

    viewNote(el) {
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

    editNote() {
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

    removeNote() {
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

    search(name, description) {
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
}
