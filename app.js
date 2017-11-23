const fs = require('fs')
const express = require('express')

const app = express()
const PORT = 7777

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res){
    return res.redirect('/public/home.html')
})

app.get('/music', function(req, res){
    let fileID = req.query.id
    let file = __dirname + '/music/' + fileID
    fs.exists(file, function(exists){
        if(exists){
            let rstream = fs.createReadStream(file)
            rstream.pipe(res)
        }
        else{
            res.send("404 TRY AGAIN")
            res.end()
        }
    })
})


app.listen(PORT)
console.log('Server is listenning on port ' + PORT)