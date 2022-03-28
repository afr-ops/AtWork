	

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    

})(jQuery);

$('.js-tilt').tilt({
    scale: 1.1
})




$("#hogar").hide()
.delay(600)               
.show(1000)
.append("Feliz cumple Gabyyyyyy")                 
.animate({fontSize: '1cm', color: "#986ded", opacity: '0.8'}, 800)
.delay(800)
.animate({fontSize: '1cm', opacity: '0.6'}, 1000);

$("#constructor").hide()
.delay(2000)               
.show(3000)
.append("para un colgado.....")          
//.animate({fontSize: '0.6cm', color: "#986ded", opacity: '1'}, 1000)
.delay(600)
.animate({fontSize: '0.6cm', opacity: '0.8'}, 800);

$("#puto").hide()
.delay(3000)               
.show(5000)
.append("LOOP de regalo :)  ")                 
//.animate({fontSize: '0.6cm', color: "#986ded", opacity: '1'}, 1000)
.delay(1000)
.animate({fontSize: '0.6cm', opacity: '0.8'}, 800, ElLoop );


let goose = { location: "heaven"};
let cheese = {     
   
    __proto__: goose
};// ??


console.log(cheese === goose); //false
console.log(cheese.location); //heaven

goose.location = "hell";
console.log(cheese.location); // hell





 function ElLoop() {

    
   
    
  }
