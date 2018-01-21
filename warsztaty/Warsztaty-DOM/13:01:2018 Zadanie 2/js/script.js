'use strict';
var imieKandydata = document.getElementById("imie");
var nazwiskoKandydata = document.getElementById("nazwisko");


function pobierzImie(e) {
    e.preventDefault();
    console.log(imieKandydata.value, nazwiskoKandydata.value);
}
