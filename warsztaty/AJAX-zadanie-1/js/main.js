'use strict';


function pobierzDane() {
    'use strict';
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://echo.jsontest.com/userId/108/userName/%20Akademia108/userURL/%20akademia108.pl");

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {

            if (xhttp.status == 200) {

                var data = xhttp.responseText;
                
                /* Parsing JSON text*/
                var myObj = JSON.parse(data);
//                console.log(myObj);
//                document.getElementById("user-id").innerHTML += myObj.userId;
//                document.getElementById("user-name").innerHTML += myObj.userName;
//                document.getElementById("user-url").innerHTML += myObj.userURL;
                
                var userIdField = document.createElement("p"); /*dodaje paragraf*/
                var parText = document.createTextNode(myObj.userId); /*dodaje teks to paragrafu*/
                document.body.appendChild(userIdField); /*dodaje paragraf */
                userIdField.appendChild( parText ); /* dodaj tekst tego paragrafu*/
                
                var userNameField = document.createElement("p");
                var parText = document.createTextNode(myObj.userName);
                document.body.appendChild(userNameField);
                userNameField.appendChild( parText );
                
                var userUrlField = document.createElement("p");
                var parText = document.createTextNode(myObj.userURL);
                document.body.appendChild(userUrlField);
                userUrlField.appendChild( parText );
            }

            xhttp = null;
        }


    }
    xhttp.send();

}

document.querySelector("button").onclick = pobierzDane;

