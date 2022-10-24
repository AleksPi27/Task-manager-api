const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound= require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/tasks', urlLogger, tasks)
app.use(notFound)
app.use(errorHandler)


// app.get('/api/v1/tasks', (req, res) => {
//     res.send('Get Tasks')
// })

// app.post('/api/v1/tasks', (req, res) => {
//     res.send('Create a new task')
// })

// app.get('/api/v1/tasks/:id', (req, res) => {
//     res.send('Get single task')
// })

// app.patch('/api/v1/tasks/:id', (req, res) => {
//     res.send('Update a task')
// })

// app.delete('/api/v1/tasks/:id', (req, res) => {
//     res.send('Delete a task')
// })

// app.get('/user/:id', (req, res, next) => {
//     if (req.params.id === '0') next('route')
//     else next()
// }, (req, res, next) => {
//     res.send('regular')
// })

// app.get('/user/:id', (req, res, next)=> {
//     res.send('special')
// })

function urlLogger(req, res, next){
    console.log(req.get('host'))
    console.log('requested url is ', req.originalUrl)
    next()
}

// function errorHandler(err,req, res, next){
//     console.log('Bad')
//     res.status(500).json({error: err});
//     // next()
// }

// app.use('/api/v1/tasks', errorHandler, tasks)
const port = process.env.PORT || 3000

const start = async () => {
    try{
    await connectDB(process.env.DB_URL);
    app.listen(port, console.log(`Server is started on port ${port}`))
    }catch(err){
        console.log(err);
    }
}

start()
