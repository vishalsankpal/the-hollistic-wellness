var servicelist = [
    "<i class='ti-check-box text-primary'></i> Preventive health check-up",
    "<i class='ti-check-box text-primary'></i> Diagnostics services",
    "<i class='ti-check-box text-primary'></i> OPD services",
    "<i class='ti-check-box text-primary'></i> Onesite services",
    "<i class='ti-check-box text-primary'></i> OHC (medical room services)",
    "<i class='ti-check-box text-primary'></i> Onesite services",
    "<i class='ti-check-box text-primary'></i> Health screening module for students ",
    "<i class='ti-check-box text-primary'></i> Health awareness modules ",
    "<i class='ti-check-box text-primary'></i> First Aid Training",
    "<i class='ti-check-box text-primary'></i> Vaccination",
    "<i class='ti-check-box text-primary'></i> Pre-Employment Health Check-up",
    "<i class='ti-check-box text-primary'></i> Worker Health Check-up Camps",
    "<i class='ti-check-box text-primary'></i> Health Education Talk and Medical Consoling",
    "<i class='ti-check-box text-primary'></i> Wellness Programs",
    "<i class='ti-check-box text-primary'></i> Medical equipment and Consumables Supplies",
    "<i class='ti-check-box text-primary'></i> Pharmacy",
    "<i class='ti-check-box text-primary'></i> Report Analysis",
    "<i class='ti-check-box text-primary'></i> Nutrition, Yoga, Zumba Camps",
    "<i class='ti-check-box text-primary'></i> Disease and Stress Management",
    "<i class='ti-check-box text-primary'></i> Sex Education",
    "<i class='ti-check-box text-primary'></i> Vision and Oral Care",
    "<i class='ti-check-box text-primary'></i> Women Health",
    "<i class='ti-check-box text-primary'></i> Workshop / Training session on Safety"
];

var element = $('#rs .servicebox .servicetext');

element[0].innerHTML = servicelist[0];
element[1].innerHTML = servicelist[1];
element[2].innerHTML = servicelist[2];
element[3].innerHTML = servicelist[3];

var timer = setInterval(function(){
    element.fadeOut(100);
    for(i=0; i<4; i++){
        var index = Math.floor((Math.random() * 4) + 1);
        element[i].innerHTML = servicelist[index];
    }
    element.fadeIn(1000);
},3000);