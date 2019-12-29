// 
$(document).ready(function(){
    $('#appointment').click(function(e){
        e.preventDefault();
        var x = $('#appointmentform').serialize();
        console.log(x);
    })
    
    $(document).scroll(function(){
        var scrolltop = $(document).scrollTop();
        if(scrolltop>100){
            $("nav").css({"position": "relative","top" :scrolltop,"z-index": 1,"width": "100%"});
            $("nav").scrollTop = 0;
        }
        else{
            $("nav").css({"position":"static"});
        }
    });
    
})