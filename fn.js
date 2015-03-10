/**
 * Created by joey on 3/9/15.
 */

$( document ).ready(function() {
    //Bindin' stuff
    doBind();
});

function doBind() {
    $( '.test-alert' ).on( "click", function() {
        console.log( 'alert clicked!' );

        //Takes the default alert types, success, warning, danger, info
        fireAlert( 'info', 'GREEEAT SUCCESS!', false);
    });

}

function fireAlert( type, msg, dismissable) {
    var msg = msg, type = type, dismissable = dismissable;

    //Testing alerts types, msgs, dismissable
    //console.log( type, msg, dismissable);

    var alert = '<div class=\"alert alert-'+ type +' fadeInDown animated alert-dismissible \" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>'+ msg +'</div>';
    $( alert ).appendTo('#alert');

    //This is ugly
    setTimeout(function() {
        $( '.alert' ).removeClass('fadeInDown').addClass('fadeOutUp');
    }, 3000);

    //This is really ugly
    setTimeout(function() {
        $( '.alert' ).remove();
    }, 3500);

    /*
     * http://www.intridea.com/blog/2011/2/8/fun-with-jquery-deferred.
     * Interesting...
     */
    //$.wait = function( time ) {
    //    return $.Deferred(function( dfd ) {
    //        setTimeout(dfd.resolve, time);
    //    });
    //}
    //
    //$.wait(3000).then(function() {
    //    console.log('wait fired');
    //    $( '.alert' ).removeClass('fadeInDown').addClass('fadeOutUp');
    //});
}