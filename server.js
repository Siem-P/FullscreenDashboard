// Import important Packages/Routes]
import express from 'express'
import indexRoute from "./routes/index.js"

// Creat new express app
const server = express()

// Set port number 
server.set('port',	process.env.PORT || 8000)

// Set the view engine
server.set('view engine', 'ejs')
server.set('views', './views')

// Set the public map
server.use(express.static('public'))

// Set the handler for forms
server.use(express.json())
server.use(express.urlencoded({ extended:true })) 

// set the routes
server.use('/', indexRoute)

// Start listening
server.listen(server.get('port'), () => {
    console.log(`Application started on http://localhost:${server.get('port')}`)
})

