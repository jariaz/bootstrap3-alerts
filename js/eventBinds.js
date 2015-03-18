(function($) {
    ja.eventBinds = {
        global: [
            {
                event: 'click',
                selector: '.test-alert-1',
                fn: function () {
                    ja.fn.fireAlert( 'info', 'More info ... ?', false);
                }
            },
            {
                event: 'click',
                selector: '.test-alert-2',
                fn: function () {
                    ja.fn.fireAlert( 'success', ' GREAT SUCCESS!', false);
                }
            },
            {
                event: 'click',
                selector: '.test-alert-3',
                fn: function () {
                    ja.fn.fireAlert( 'danger', 'DANGER #@$@#$#%$#%!', false);
                }
            }
        ]
    }
})(jQuery);