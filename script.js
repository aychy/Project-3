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
