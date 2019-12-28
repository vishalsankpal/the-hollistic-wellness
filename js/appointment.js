$(document).ready(function () {
    
    $( ".make-an-appointment" ).click(function() {
        $('#appointmentform').submit();
        $(".make-an-appointment").hide();
        var params = $( this ).serialize();
        $.get("http://localhost:5001/the-holistic-wellness/us-central1/sendMail"+params,
        function (data, status) {
            alert("Appointment booked"+params);
            $(".make-an-appointment").show();
        });
      });
});