(function($) {
    ja.eventBinds = {
        global: [
            {
                event: 'click',
                selector: '.test-alert-1',
                fn: function () {
                    ja.fn.showAlert('info','Information Alert, random info here?', true);
                    //Testing getting fake data
                    //ja.ajax.getData();
                }
            },
            {
                event: 'click',
                selector: '.test-alert-2',
                fn: function () {
                    ja.fn.showAlert( 'success', ' GREAT SUCCESS!', true);
                }
            },
            {
                event: 'click',
                selector: '.test-alert-3',
                fn: function () {
                    ja.fn.showAlert( 'danger', 'DANGER #@$@#$#%$#%!', true);
                }
            },
            {
                event: 'click',
                selector: '.test-alert-4',
                fn: function () {
                    ja.fn.showAlert( 'danger', 'Need to wait till an ajax request is done? Set autohide to false. ( closes in 5sec )', false);
                    ja.fn.lag();
                }
            }
        ]
    }
})(jQuery);