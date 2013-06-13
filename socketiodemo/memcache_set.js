/**
 * Created with JetBrains WebStorm.
 * User: zx
 * Date: 13-6-13
 * Time: 下午1:49
 * To change this template use File | Settings | File Templates.
 */
var nMemcached = require('memcached'),
    memcached;
memcached = new nMemcached("127.0.0.1:11211");
memcached.set("hello",'test is ok!', 10000, function( err,result){
    if( err ) console(err);
    console.dir(result);
    memcached.end();

})