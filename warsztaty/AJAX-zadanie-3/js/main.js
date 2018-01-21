'use strict';

function ajax() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {

            if (xhttp.status == 200) {

                var data = xhttp.responseText;


                var listaPracownikow = JSON.parse(data);
                //                                console.log(listaPracownikow);



                for (var i = 0; i < listaPracownikow.length; ++i) {
                    var userIdField = document.createElement("p");
                    var parText = document.createTextNode(listaPracownikow[i].id);
                    document.body.appendChild(userIdField);
                    userIdField.appendChild(parText);

                    var userNameField = document.createElement("p");
                    var parText2 =
                        document.createTextNode(listaPracownikow[i].name);
                    document.body.appendChild(userNameField);
                    userNameField.appendChild(parText2);

                    var userEmailField = document.createElement("p");
                    var parText3 =
                        document.createTextNode(listaPracownikow[i].email);
                    document.body.appendChild(userEmailField);
                    userEmailField.appendChild(parText3);
                }
            }

            xhttp = null;
        }


    }
    xhttp.send();

}

//ajax();



document.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop;
    var innerHeight = window.innerHeight;
    var htmlOffsetHeight = document.documentElement.offsetHeight;

    if (scrollTop + innerHeight == htmlOffsetHeight) {
        ajax();
    }

});
