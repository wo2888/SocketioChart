var nMemcached = require( 'memcached' ),
    memcached;
memcached = new nMemcached("127.0.0.1:11211" );
memcached.get( "hello", function( err, result ){
    if( err ) console.error( err );
    console.dir( result );
    memcached.end();
});