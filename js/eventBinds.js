(function($) {
    ja.eventBinds = {
        global: [
            {
                event: 'click',
                selector: '.test-alert-1',
                fn: function () {
                    ja.fn.fireAlert('info','Getting data...',true);
                    ja.ajax.getData();
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