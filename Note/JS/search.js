function search() {
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