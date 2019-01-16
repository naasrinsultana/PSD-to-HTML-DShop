(function($){
   'use strict';
    
    jQuery(document).(function(){
        
        var pImg = $('.p-img').height();
        var topImg = $('.top-img').height();
        
        $('.p-content').css('height', pImg + 'px');
        $('.p-details').css('height', (pImg - topImg) + 'px');
        
    });
})(jQuery);