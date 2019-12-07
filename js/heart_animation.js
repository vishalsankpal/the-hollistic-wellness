var img = $("#heart img");

var anime = setInterval(add,100);
var number = 1;
function add(){
    img.attr("src","./images/animation/f ("+number+").png");
    number = number+1;
    if(number>18){
        number = 1;
    }
}
