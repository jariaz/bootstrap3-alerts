(function($) {
    ja.ajax = {
        doStuff: function(){
            //console.log('ue.ajax fired!', data);
        },
        getData: function() {
            $.ajax({
                dataType: "json",
                url: 'data.json',
                success: function ( results ) {
                    var name = results[0].friends[0].name;
                    ja.fn.fireAlert('success','It worked! I got a name = ' + name, true);
                }
                }).fail( function() {
                    ja.fn.fireAlert('failed','FAILED.', true);
            });
        }
    }
})(jQuery);
