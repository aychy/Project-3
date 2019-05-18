# Project-3

<!--json.html-->
<!doctype html>
<html lang="en">

<head>
    
    <title>Project 3</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

   

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    
</head>

<body>

        <h1>Project 3</h1>
        <h6>Aydan Maksudovski</h6>
        <p>This page will convert Inches to Centimeters and vice versa</p>
    
        <br>
        

    

    <form id="cm-converter">
        <div class="form-group">
                <label for="inchesInput">Convert Inches to Centimeters</label>
            <input type="text" class="form-control" id="inchesAmnt" placeholder="Input Inches" required>
        </div>

        <div class="form-group">
            <input class="btn-btn-dark" type="submit" value="Convert to Centimeter" onClick="convToCm()">
        </div>
    </form>


    <div id="resultCm">



    </div>

        
        <form id="in-converter">
            <div class="form-group">
                <label for="centiInput">Convert Centimeters to Inches</label>
                <input type="text" class="form-control" id="centiInput" placeholder="Input Centimeters" required>
            </div>
            <div class="form-group">
                <input class="btn-btn-dark" type="submit" value="Convert to Inch" onClick="convToIn()">
            </div>
    
        </form>


        <div id="resultIn">



        </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
</body>

</html>


<!--script.js-->

function convToCm(){
    $('form').on('submit',function(a){
        a.preventDefault();
        var inchesInput=$('inchesInput').val();
        var apiBase='https://statenweb.mockable.io/conversions/'
        axios.get(apiBase).then(function(response){
        var inchesInCm=response.data.inchesInCm;
        var centResult=(parseFloat(inchesInput)/parseFloat(inchesInCm)).toFixed(2);
        var html='<p>Value in centimeters' +centResult+ '</p>';
        $('#resultCent').html(html);
        
        });
    });
}

function convToIn(){
    $('form').on('submit',function(a){
        a.preventDefault();
        var centiInput=$('centiInput').val();
        var apiBase='https://statenweb.mockable.io/conversions/'
        axios.get(apiBase).then(function(response){
        var inchesInCm=response.data.inchesInCm;
        var inchResult=(parseFloat(centiInput)*parseFloat(inchesInCm)).toFixed(2);
        var html='<p>Value in inches'+ inchResult +'</p>';
        $('#resultInch').html(html);
        
        });
    });
}



//$(document).ready(function(){


 //   var apiBase="https://statenweb.mockable.io/conversions/";

  //  axios.get(apiBase).then(function(response){
   /*     var inchesInCm = response.data.Map(function(inches){
        

            return $('<p>').addClass('inches').data('inchesInCm',inches.inchesInCm).html(inches.title);
           //<p class="inches">(title)</p>^^^^
        });
        $('#inches').html(inchesInCm);
        $('.inches').on('click',function(){
            //alert($(this).data('inchesInC'));
            var inchesInC=$(this).data('inchesInCm');
            var url=apiBase+inchesInC;
            //console.log(url);
            axios.get(url).then(function(response){
                //console.log(response)
                
                var inchesInCm=(inches*2.54);
                var centimetersInInch=(centimeters/2.54)
                

                var $inchesInCm =$('<h1>').html(inches)
                $('#inches').html([$inchesInCm]);
               

               
            });
            });
        });
        //console.log(inchesHTML);
       // $('#inchess').html(inchesHTML);
       $('#current-inches').html('LOADING');
    });*/
    
    
    
<!--style.css-->
body{
background-color:powderblue;

}

h1{
    color:whitesmoke;
}

h6{
    color:whitesmoke;
}
