
const express = require('express');
const app = express()
const path = require("path");

// Your code goes here
const schema = require("./models/subscribers"); // Import the subscriber model
// const { error } = require("console"); // Import the 'error' object from the console module
app.get("/", (req, res) => {
    res.send("hello World!"); // Serve the index.html file as the home page
  });

app.get("/subscribers", async (req, res, next) => {
    try {
      let subscribers = await schema.find(); // Retrieve all subscribers from the schema/model
      res.status(200).json(subscribers); // Send the subscribers as a JSON response with a status of 200 (OK)
    } catch (err) {
      res.status(400); // Set the response status to 400 (Bad Request)
      next(err); // Pass the error to the error handling middleware
    }
  });

  module.exports = app;


















module.exports = app;
