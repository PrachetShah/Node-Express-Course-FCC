// Prachet ka code hai, haath lagane ke pehle 10 baar sochna
const express = require('express')
const app = express()
const port = 8000

// static assets
app.use(express.static('./static'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200)
})

app.post('/submit', (req, res)=>{
    console.log(req.body);
    res.status(200).send(`Hello ${req.body.firstName} ${req.body.lastName}`)
})

app.get('/:id', (req, res) => {
  res.send(`Hello World!, Body Contains Param: ${req.params['id']}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
