'use strict';
$(function () {
    'use strict';
    $("button").click(function () {
        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (data) {
            //            console.log(data.userId);

            $("body").append( $('<p>').text(data.userId) );
            $("body").append( $('<p>').text(data.userName) );
            $("body").append( $('<p>').text(data.userURL) );
  
//
//            $("body").append('<p class="userName"></p>');
//            $("p.userName").text(data.userName)
//
//            $("body").append('<p class="userURL"></p>');
//            $("p.userURL").text(data.userURL)

            //            $( "body" ).append( '<p class="userId"></p>' );
            //            $("#userId").append( data.userId );
            //            
            //            $( "body" ).append( '<p></p>' );
            //            $( "body" ).append( '<p></p>' );


            ////            


            //            var items = [];

            //            console.log(data);

            //            $.each(data, function (key, val) {
            //                items.push("<p" + key + ">" + val + "</p>");
            //            });
            //
            //            $("<p/>", {
            //                html: items.join("")
            //            }).appendTo("body");
        });
    });
});
