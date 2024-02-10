
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
const port = 3000

app.post('/api/userCreate', function(req, res){
    
   res.json({
       data: req.body});
   
    console.log(req.body); 

})

app.listen(port, () => console.log(`Server listening on port 
${port}!`))