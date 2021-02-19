$(document).ready(function(){


    $('button').click(function(){

      //----- load() Method
        //$('#div1').load('data.json');

        // $('#div1').load('data.json', function(responseTxt, statusTxt, xhr){
        //   if(statusTxt == 'success'){
        //       console.log(statusTxt);
        //       console.log('data load successfully');
        //     }else {
        //       console.log('Error: ' + xhr.status + ': ' + xhr.statusTxt);
        //     }
        // });


        //----- get method
        // $.get('data.json', function(data, status){
        //   console.log(data + ' : ' + status);
        // });

      //  $.ajax('array_of_object.json', 
      //  {
      //      dataType: 'json', // type of response data
      //      timeout: 500,     // timeout milliseconds
      //      success: function (data,status,xhr) {   // success callback function
      //          $('p').append(data.firstName + ' ' + data.middleName + ' ' + data.lastName);
      //      },
      //      error: function (jqXhr, textStatus, errorMessage) { // error callback 
      //          $('p').append('Error: ' + errorMessage);
      //      }
      //  });


        //----- ajax() Method 
      
        $.ajax({
            url: 'array_of_object.json', //'content.txt' http://localhost:3000/getData
            type: 'get', 
            error: function(error){
                console.log('Error: ' + error);
              },
            success: function(result){
              console.log(123);
              console.log(result);
              var res = '';

              function grade(getMarks){
                if(getMarks >= 60){
                  return 'B';
                  console.log('B');
                }else if(getMarks >= 80){
                  return 'A';
                }else if(getMarks >= 90){
                  return 'O';
                }else if(getMarks >=35){
                  return 'C';
                }else {
                  return 'F';
                }
              };
               //grade(result[i].marks);

              for(var i = 0; i < result.length; i++){
                  
                  res += '<tr>' + '<td>' + (i*1+1) + '</td>' + '<td>' + result[i].name + '</td>' + '<td>' + result[i].lastName + '</td>' +
                   '<td>' + result[i].rollNo + '</td>' + '<td>' + result[i].marks + '</td>' + '<td>' + grade(result[i].marks); + '</td>' + '</tr>'; 

                }
                $('#resultData').append(res);
                //$('#resultData').html(res);
                //document.getElementById('#result').innerHTML = res;

              }
              
        });
        console.log(456);

        




        //
        // $.ajax({
        //   url: 'http://localhost:3000/saveuser',
        //   type: 'post',
        //   data: {firstName: 'John', lastName: 'Doe'},
        //   error: function(error){
        //     console.log('Error : ' + error);
        //   },
        //   success: function(suc){
        //     console.log(suc);
        //   }

        // });
      




    }); // button click









      
 
});
