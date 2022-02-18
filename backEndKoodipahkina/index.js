const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3001

console.log(`Server running on port ${PORT}`)

let note = [
    1,2
  ]

app.listen(PORT)
app.use(express.json())
app.use(cors()) //CORS fix


app.get('/', (req, res) => {
    res.json(note)
  })

app.post('/myapi/checkprime', (request, response) => {
    let data = request.body.number;//number is type inside
    response.json({isPrime : isPrime(data)})
  })


app.post('/myapi/sum', (request, response) => {
    let data = request.body.list;
    let sum = 0;
    for(const number of data)
    {
        sum += number;
    }
    response.json({result:sum, isPrime: isPrime(sum)});
})

function isPrime(number) {
    for(let i = 2, s = Math.sqrt(number); i <= s; i++)
        if(number % i === 0) return false; 
    return number > 1;
}
