
var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");

var addBtn = document.getElementById("addBtn");

var tBody = document.getElementById("tBody");
var getVisit =document.getElementById("getVisit");
var bookMarks = [];




if (localStorage.getItem("bookMarks") == null) {
    bookMarks = [];
} else {
    bookMarks = JSON.parse(localStorage.getItem("bookMarks"));
    displayBook();
}


var nameRegex = /^[A-Za-z_]{1,}$/
function isNameValid() {
    if(nameRegex.test(nameInput.value)) {
        return true;
    }else{
        return false;
    }
}
var urlRegex = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
function isUrlValid() {
    if(urlRegex.test(urlInput.value)) {
        return true;
    }else{
        return false;
    }
}



nameInput.onkeyup = function(){
    if(isUrlValid() && isNameValid()){
        addBtn.removeAttribute("disabled");
    }else{
        addBtn.disabled = "true";
    }
}



urlInput.onkeyup = function(){
    if(isUrlValid() && isNameValid()){
        addBtn.removeAttribute("disabled");
    }else{
        addBtn.disabled = "true";
    }
}












addBtn.onclick = function() {
    var bookMark = {
        name : nameInput.value
    }
    bookMarks.push(bookMark);
    localStorage.setItem("bookMarks",JSON.stringify(bookMarks));
    displayBook();
    cleardata();

}




function displayBook() {

    var cartona = ``;
    for (var i = 0; i < bookMarks.length; i++) {
        cartona += `  <tr>
    <td>${i + 1}</td>
    <td>${bookMarks[i].name}</td>
    
   
    <td>
        <button onclick="getVisit(${i})" class="btn btn-warning btn-sm">
        <i class="fa-solid fa-eye"></i>
        Visit</button>
    </td>
    <td>
        <button onclick="deleteBook(${i})" class="btn btn-danger btn-sm">
        <i class="fa-solid fa-trash-can"></i>
        Delete</button>
    </td>
    
</tr> `;
    }
    document.getElementById("tBody").innerHTML = cartona;
}








function deleteBook(index) {

    bookMarks.splice(index, 1);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
    displayBook();
}





function cleardata() {
    nameInput.value = "";
    urlInput.value = "";
}

function getVisit() { 

    bookMarks.push(index,1);
    localStorage.setItem("bookMarks",JSON.stringify(bookMarks));
    disabled(bookMarks);
}



