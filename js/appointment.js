// 
$(document).ready(function(){
    $('#appointment').click(function(e){
        e.preventDefault();
        var x = $('#appointmentform').serialize();
        console.log(x);
    })
})