import express from "express"
const app = express()


app.get('/', (req, res) => res.json({ message: "Hello World!!! Welcome to broCode messenger" }))


const port = 8000
app.listen(port, () => console.log(`Server on port ${port}`))
