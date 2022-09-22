$(document).ready(function(){
    hideAllDefault();
    showAllText();
    hideAllText();
})

function hideAllDefault() {
    $('.video-text').hide();
    $('.audio-text').hide();
    $('.consegna-text').hide();
}

function showAllText() {
    $('#video').mouseover(function(){
        $('.video-text').show();
        $('#video').css('box-shadow', '2px 2px 20px black')
    })

    $('#audio').mouseover(function(){
        $('.audio-text').show();
        $('#audio').css('box-shadow', '2px 2px 20px black')
    })

    $('#consegna').mouseover(function(){
        $('.consegna-text').show();
        $('#consegna').css('box-shadow', '2px 2px 20px black')
    })

}

function hideAllText() {
    $('#video').mouseout(function(){
        $('.video-text').hide();
        $('#video').css('box-shadow', 'none')
    })

    $('#audio').mouseout(function(){
        $('.audio-text').hide();
        $('#audio').css('box-shadow', 'none')
    })

    $('#consegna').mouseout(function(){
        $('.consegna-text').hide();
        $('#consegna').css('box-shadow', 'none')
    })

}