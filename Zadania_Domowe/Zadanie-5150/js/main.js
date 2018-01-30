'use strict';


function ajax() {
    
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php");

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {

            if (xhttp.status == 200) {

                var data = xhttp.responseText;

                var myObj = JSON.parse(data);
                
                var mainContainer = document.createElement("div");
                mainContainer.id = 'dane-programisty';
                document.body.appendChild(mainContainer);

                var daneProgramisty = document.createElement("p");
                var parText = document.createTextNode(myObj.imie + ", " + myObj.nazwisko + ", " + myObj.zawod);
                document.getElementById("dane-programisty").appendChild(daneProgramisty);
                daneProgramisty.appendChild(parText);
             
            }

            xhttp = null;
        }


    }
    xhttp.send();

}

document.querySelector("button").onclick = ajax;
