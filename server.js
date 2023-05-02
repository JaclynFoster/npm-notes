const express = require('express') //this is a function
const app = express() //invoking the function-this object let's us use express
app.use(express.json()) //saying we will be including json need to invoke the json

//incoming get request with URL http://localhost:4040/getAString
app.get('/getAString', (req, res) => { //express is running the callback
    console.log("Howdy") // response to nodemon terminal
    res. status(200).send("Hey!") //sends response back to the front end
})
//multiple app.get's or other requests with the same path will conflict and 1 will be ignored

app.post('/getAString', (req, res) => { //this will not interfere with the app.get because this will only respond to post requests
    console.log("Howdy") // response to nodemon terminal
    res.send("Hey!") //
})



app.listen(4040, () => {console.log("Server running on port 4040")})