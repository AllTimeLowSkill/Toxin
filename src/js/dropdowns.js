
$(document).ready(function(){
    $('.up-services').hide();
    $('.click-dropdown-services').click(function(){
        $('.dropdown-services').toggle(400);
        $('.up-services').toggle(200);
        $('.down-services').toggle(200);

    })
});

$(document).ready(function(){
    $('.up-agreements').hide();
    $('.click-dropdown-agreements').click(function(){
        $('.dropdown-agreements').toggle(400);
        $('.up-agreements').toggle(200);
        $('.down-agreements').toggle(200);


    })
});