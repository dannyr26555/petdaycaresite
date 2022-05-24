$(function(){
    $('#headingThree').on('click', function(){
        if(!$('#headingOne').hasClass('dropup') && !$('#headingTwo').hasClass('dropup') && !$('#headingThree').hasClass('dropup')){
            $('#headingThree').addClass('dropup');
        } else if (!$('#headingThree').hasClass('dropup') && ($('#headingOne').hasClass('dropup') || $('#headingTwo').hasClass('dropup'))){
            $('#headingThree').addClass('dropup');
            $('#headingOne').removeClass('dropup');
            $('#headingTwo').removeClass('dropup');
        } else {
            $('#headingThree').removeClass('dropup');
        }
    })
    
    $('#headingTwo').on('click', function(){
        if(!$('#headingOne').hasClass('dropup') && !$('#headingTwo').hasClass('dropup') && !$('#headingThree').hasClass('dropup')){
            $('#headingTwo').addClass('dropup');
        } else if (!$('#headingTwo').hasClass('dropup') && ($('#headingOne').hasClass('dropup') || $('#headingThree').hasClass('dropup'))){
            $('#headingTwo').addClass('dropup');
            $('#headingOne').removeClass('dropup');
            $('#headingThree').removeClass('dropup');
        } else {
            $('#headingTwo').removeClass('dropup');
        }
    })
    
    $('#headingOne').on('click', function(){
        if(!$('#headingOne').hasClass('dropup') && !$('#headingTwo').hasClass('dropup') && !$('#headingThree').hasClass('dropup')){
            $('#headingOne').addClass('dropup');
        } else if (!$('#headingOne').hasClass('dropup') && ($('#headingTwo').hasClass('dropup') || $('#headingThree').hasClass('dropup'))){
            $('#headingOne').addClass('dropup');
            $('#headingTwo').removeClass('dropup');
            $('#headingThree').removeClass('dropup');
        } else {
            $('#headingOne').removeClass('dropup');
        }
    })
})