
    console.log("frere");

    function $_GET(param) {
        var vars = {};
        window.location.href.replace( location.hash, '' ).replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );

        if ( param ) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    }

$(document).ready(function () {
    var event = decodeURI( $_GET( 'event' ) );
    console.log(event);

    switch (event) {
        case '0':
            $("#future").addClass("active");
            $("#upcoming").addClass("active show");
            break;
        case '1':
            $("#past").addClass("active");
            $("#archived").addClass("active show");
            break;
        case '2':
            $("#sang").addClass("active");
            $("#all").addClass("active show");
            break;
    }

    $('#list_event').click(function (){
        $('#event_past').toggle();
        if ($(this).text() == 'Voir les anciens Events')
            $(this).text('Cacher les anciens Events');
        else
            $(this).text('Voir les anciens Events');
    })

});