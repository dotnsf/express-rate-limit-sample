//. app_new.js
var express = require( 'express' ),
    app = express();

//. rate limit : 100 times per 10 minutes
var rate = require( 'express-rate-limit' );
var limit = rate({
  windowMs: 10*60*1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});
app.use( limit );

app.get( '/', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );
  res.write( JSON.stringify( { status: true }, null, 2 ) );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
