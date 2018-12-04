(function ($) {
    $.fn.onscroll = function (options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            backgroundColor: "#f00",
            height: '3px',
            position: 'fixed'
        }, options);
        var mySelector = this.selector;
        this.each(function () {
            $(window).scroll(function () {
                var offsettop = parseInt($(this).scrollTop());
                var parentHeight = parseInt($('body, html').height() - $(window).height());
                var vscrollwidth = offsettop / parentHeight * 100;
                $(mySelector).css({width: vscrollwidth + '%'});
            });
            $(mySelector).css({
                backgroundColor: settings.backgroundColor,
                height: settings.height,
                position: settings.position
            });
        });
        return this;
    };
}(jQuery));
