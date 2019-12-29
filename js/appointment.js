$(document).ready(function () {
    
    $( ".make-an-appointment" ).click(function(event) {
        event.preventDefault();
        console.log($('#appointmentform').serialize());
        // $.ajax({
        //     url:'',
        //     type:'get',
        //     data:$('#appointment-form').serialize(),
        //     success:function(result){
        //         console.log(result);
        //     }
        // })
        // $('#appointmentform').submit();
        // var params = $('#appointment-form').serialize();
        // console.log(params);
        // $.get("https://us-central1-the-holistic-wellness.cloudfunctions.net/sendMail"+params,
        // function (data, status) {
        //     alert("Appointment booked"+params);
        //     $(".make-an-appointment").show();
        // });
      });
});
