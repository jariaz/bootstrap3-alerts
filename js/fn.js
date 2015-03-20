(function($) {
    ja.fn = {
        onReady: function() {
            //Binding stuff.
            this.bindEvents();
        },
        bindEvents: function() {
            ja.fn.doBind( 'global' );
        },
        doBind: function( key ) {
            for ( var i = 0; i < ja.eventBinds[ key ].length; i++ ) {
                var bind = ja.eventBinds[ key ][ i ];
                $( bind.handler || document ).on( bind.event, bind.selector, bind.fn );
            }
        },
        showAlert: function( type, msg, autohide ) {

            /*
             By default I'm auto hidding/fading the alert,
             if you wanted to say, fire an ajax request, and
             hide the alert after its finished, just set
             autohide == false, and execute alertDone();
             */

            var msg = msg, type = type, autohide;
            var randomId = Math.floor( (Math.random() * 100000000 ));

            var alert = '<div class=\"alert alert-'+ type +' fadeInDown animated alert-dismissible \" id=\"'+ randomId +'\"  autohide=\"'+ autohide +'\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>'+ msg +'</div>';
            $( alert ).appendTo('#alert');

            if (autohide) {

                //Yup, this is ugly.
                setTimeout( function() {
                    $( '#' + randomId ).removeClass('fadeInDown').addClass('fadeOutUp');
                }, 3000);

                //Yup, this is really ugly.
                setTimeout(function() {
                    $( '#' + randomId ).remove();
                }, 3500);
            }
        },
        alertDone: function() {
            var alertToHide = '#' + $('[autohide=false]').attr('id');

            //Yup, this is ugly.
            setTimeout( function() {
                $( alertToHide ).removeClass('fadeInDown').addClass('fadeOutUp');
            }, 3000);

            //Yup, this is really ugly.
            setTimeout(function( alertToHide ) {
                $( '#' + alertToHide ).remove();
            }, 3500);

        },
        lag: function() {
            setTimeout( function() {
                ja.fn.alertDone();
            }, 5000);
        }
    }
})(jQuery);
