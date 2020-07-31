$(document).ready(function () {
   $('button').click(function (e) { 
       e.preventDefault();
     
       $.getJSON("http://api.icndb.com/jokes/random",function (data, textStatus, jqXHR) {
        console.log(data);
        console.log(textStatus);
        console.log(jqXHR);

        $('#joke').html(data.value.joke);   
       } );
    }
  
       




   );
    
});