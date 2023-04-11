import express from 'express'

const index = express.Router()

// Index page
index.get('/', (request, response) => {
    // Run function
    response.render('index')
  })
  
  export default index