// first import/require express
import express from 'express';

// creating my app using express
const app = express();

// routing. This is where you get, post etc
app.get('/booking', function(req, res, next){
console.log(req.query)
res.json('You visited the hello endpoint!');
});

app.listen(3000, function() {
    console.log('App is listening on port 3000!')
} );
