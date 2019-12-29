// 
$(document).ready(function(){
    $('#appointment').click(function(e){
        e.preventDefault();
        // var x = $('#appointmentform1').serialize();
        // console.log(x);
        $.ajax({
            url:'https://us-central1-the-holistic-wellness.cloudfunctions.net/sendMail',
            data:$('#appointmentform1').serialize(),
            success:function(result){
                console.log(result);
            }
        })

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



    var servicelist = [
        "Preventive health check-up",
        "Diagnostics services",
        "OPD services",
        "Onesite services",
        "OHC (medical room services)",
        "Onesite services",
        "Health screening module for students ",
        "Health awareness modules ",
        "First Aid Training",
        "Vaccination",
        "Pre-Employment Health Check-up",
        "Worker Health Check-up Camps",
        "Health Education Talk and Medical Consoling",
        "Wellness Programs",
        "Medical equipment and Consumables Supplies",
        "Pharmacy",
        "Report Analysis",
        "Nutrition, Yoga, Zumba Camps",
        "Disease and Stress Management",
        "Sex Education",
        "Vision and Oral Care",
        "Women Health",
        "Workshop / Training session on Safety"
    ];
    
    var element = $('#rs .servicebox .servicetext');
    var randomehistory = "";

    element[0].innerHTML = servicelist[0];
    element[1].innerHTML = servicelist[1];
    element[2].innerHTML = servicelist[2];
    element[3].innerHTML = servicelist[3];
    element[4].innerHTML = servicelist[4];
    element[5].innerHTML = servicelist[5];
    
    var timer = setInterval(function(){
        element.fadeOut(100);
        for(i=0; i<6; i++){
            var randomenow = Math.floor((Math.random() * 23) + 1);
            var index = randomenow;
            if(randomenow==randomehistory){
                randomenow = Math.floor((Math.random() * 23) + 1);
            }
            element[i].innerHTML = servicelist[index];
            randomehistory = randomenow;
        }
        element.fadeIn(1000);
    },3000);

        var options = {
        strings: ['<span>WELLNESS</span>', '<span>WELLNESS</span>'],
        typeSpeed: 30,
        loop: true
        };

        var typed = new Typed('#typed', options);
    
})