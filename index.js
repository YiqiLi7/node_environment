// Import the express library and assign it to a variable
import express from 'express'
import fetch from 'node-fetch'



//Create an instance of an express application 
const app = express()
app.use(express.json())



// Set the port the application will be running on
const port = process.env.PORT || 3001


// // Set up a response for the root path of the application
// app.get('/dinner/:dinner', (req, res) => {
//   console.log("req.params")

//   res.json({ data: "WhatdoyouwantforDinner?" })
// })


// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {

  // Make a request to another wbesite and wait for a response
  const url = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  }

  const response = await fetch(url, options)

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  res.json({ data: 1 })
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

