const express = require( 'express' ); //import module: express
const path = require( 'path' ); //import module: path
const bodyParser = require( 'body-parser' ); //import module: body parser
const port = process.env.PORT || 3000 ; //initialize data for port

const app = express(); //express fxn to create app
app.use( bodyParser.json () ); //use body parser to read json
app.use( bodyParser.urlencoded({ extended: false }) ) //use body parser to read url

app.listen( port ); //app listen on port
console.log( `Server is running on port ${ port } ...` ); //print message to console
