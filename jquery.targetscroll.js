/* ===========================================================
* jquery-targetscroll.js
* ===========================================================
* Copyright 2014  Lionel Sakou | www.linkedin.com/pub/lionel-sakou/37/899/552/
*
* Create a smooth scroll to local target with one js call.
*
* https://github.com/lionelsakou/targetscrool
*
* ========================================================== */

!function($) {

    var defaults = {
        animate: 1000,
        anchorTopPadding: 15
    };

    $.fn.targetscroll = function(options) {
        var settings = $.extend({}, defaults, options),
        elem = $(this);

        $(elem).click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - settings.anchorTopPadding
                    }, settings.animate, 'swing');
                    return false;
                }
            }
        });

    }
} (window.jQuery);
