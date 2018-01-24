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

                var userImie = document.createElement("p");
                var parText = document.createTextNode(myObj.imie);
                document.getElementById("dane-programisty").appendChild(userImie);
                userImie.appendChild(parText);

                var userNazwisko = document.createElement("p");
                var parText = document.createTextNode(myObj.nazwisko);
                document.getElementById("dane-programisty").appendChild(userNazwisko);
                userNazwisko.appendChild(parText);

                var userZawod = document.createElement("p");
                var parText = document.createTextNode(myObj.zawod);
                document.getElementById("dane-programisty").appendChild(userZawod);
                userZawod.appendChild(parText);

                var userFirma = document.createElement("p");
                var parText = document.createTextNode(myObj.firma);
                document.getElementById("dane-programisty").appendChild(userFirma);
                userFirma.appendChild(parText);


            }

            xhttp = null;
        }


    }
    xhttp.send();

}

document.querySelector("button").onclick = ajax;
