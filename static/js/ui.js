// JavaScript Document
$(document).ready(function(){
    init()
    conHeight()
})
$(window).resize(function(){
    conHeight()
})
function conHeight(){
    $('body').animate({opacity:1},400)
    var winHeight = $(window).height()
    var headHeight = $('#headTop').height()
    var sheadHeight = $('#subHeader').height()
    var footHeight = $('#footer').height()
    var outHeight = headHeight + sheadHeight + footHeight + 40
    $('#contents .blockcon,#contents .resizebar').css({height:winHeight - outHeight})
}

function init(){




    $('.inlineTab li button').on('click',function(){
        var indexNum = $('.inlineTab li button').index(this);
        $('.inlineTab li').removeClass('active')
        $('.inlineTab li').eq(indexNum).addClass('active')
        $('.tabCon li').removeClass('active')
        $('.tabCon li').eq(indexNum).addClass('active')
        return false;
    })

}



$(document).ready(function(){
   $('input.timepicker').bootstrapMaterialDatePicker({
        date: false,
        shortTime: true,
        format: 'HH:mm',
       lang: "ko",
    });
    $('input.datepicker').bootstrapMaterialDatePicker({
        time: false,
        format: 'YYYY/MM/DD',
        lang: "ko",
    });
})
