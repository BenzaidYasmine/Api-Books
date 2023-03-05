
function httpGet_search_book() {
    console.log('hello');


    var q = document.getElementById("searchbar").value;

    if (q == undefined || q === "") {
       
        displayPaper(false);
        alert("Veuillez SVP saisir un nom d'un(e) écrivain (e) !!")
    } else {
        displayPaper(true);

        var url = "https://openlibrary.org/search/authors.json?q=" + q;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false); // false for synchronous request
        xmlHttp.send();

        var data = JSON.parse(xmlHttp.responseText); 
        //Nom de l'auteur
        document.getElementById("nom").innerHTML = data.docs[0].name;
        //Date de naissance
        document.getElementById("dob").innerHTML = data.docs[0].birth_date;
        //Date of death
        document.getElementById("dod").innerHTML = data.docs[0].death_date;
        //top livre 
        document.getElementById("top").innerHTML = data.docs[0].top_work;
        //Top livres
        populate_top_subject(data.docs[0].top_subjects)
        alert(xmlHttp.responseText.docs[0].name);
    }


}

function displayPaper(bool) {
    var x = document.getElementById("paper");
    if (bool === true) {
        x.style.display = "block";
       
    } else {
        x.style.display = "none";

    }
}

function populate_top_subject(slides) {
    var str = '';
    slides.forEach(function (slide) {
        str += '<li>' + slide + '</li>';
    });
    document.getElementById("top_subject").innerHTML = str;
}



function closeModal() {
    var getValue = document.getElementById("searchbar");
    if (getValue.value != "") {
        getValue.value = "";
    }
    displayPaper(false);
}









