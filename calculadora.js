function equal(){
          $(".outcome").val(eval($(".outcome").val()));
          $(".screen").html(eval($(".outcome").val()));
     }

function clear(){
          $(".outcome").val("");
          $(".screen").html("");
     }

$(function(){
    $(".val").click(function(e){
         e.preventDefault();
          var a = $(this).attr("href");
          $(".screen").append(a);
          $(".outcome").val($(".outcome").val() + a);
    });

     $(".equal").click(function(){equal();});

     $(".clear").click(function(){clear();});

     $(".min").click(function min(){
         $(".cal").stop().animate({width: "0px", height: "0px", marginLeft: "700px", marginTop: "1000px"}, 500);
        setTimeout(function(){$(".cal").css("display", "none")}, 600);
     });

    /* $(".close").click(function(){
          $(".cal").css("display", "none");
     });*/

    $(document).keydown(function(e){
        var aux = e.keyCode;
        var n = null;
        switch(aux){
          case 46:
            clear();
            break;
          case 48:
          case 96:
            n = 0;
            break;
          case 49:
          case 97:
            n = 1;
            break;
          case 50:
          case 98:
            n = 2;
            break;
          case 51:
          case 99:
            n = 3;
            break; 
          case 52:
          case 100:
            n = 4;
            break;
          case 53:
          case 101:
            n = 5;
            break;
          case 54:
          case 102:
            n = 6;
            break;
          case 55:
          case 103:
            n = 7;
            break;
          case 56:
          case 104:
            n = 8;
            break;
          case 57:
          case 105:
            n = 9;
            break;
          case 106:
            n = "*";
            break;
          case 107:
            n = "+";
            break;
          case 13:
            equal();
            break;
          case 109:
            n = "-";
            break;
          case 110:
            n = ".";
            break;
          case 111:
            n = "/";
            break;
        } 

        if (n!=null){
          $(".screen").append(n);
          $(".outcome").val($(".outcome").val() + n);
        }
    });
});
