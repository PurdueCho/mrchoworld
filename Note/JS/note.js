// get notes List
let list = document.getElementById('noteList');

function addNote() {
    // get title and description
    let title = document.getElementById('noteTitle').value;
    let description = document.getElementById('noteDescription').value;

    if(title === "" || description === "") {
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


