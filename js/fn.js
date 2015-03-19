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
        fireAlert: function( type, msg, dismissable ) {
            var msg = msg, type = type, dismissable = dismissable;
            var randomId = Math.floor( (Math.random() * 100000000 ));

            var alert = '<div class=\"alert alert-'+ type +' fadeInDown animated alert-dismissible \" id=\"'+ randomId +'\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>'+ msg +'</div>';
            $( alert ).appendTo('#alert');





            setTimeout( function() {
                $( '#' + randomId ).removeClass('fadeInDown').addClass('fadeOutUp');
            }, 3000);

            setTimeout(function( randomId ) {
                $( '#' + randomId ).remove();
            }, 3500);

        }
    }
})(jQuery);
