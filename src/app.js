
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
  app.get("/subscribers/names", async (req, res, next) => {
    try {
      let subscribers = await schema.find(
        {},
        { name: 1, subscribedChannel: 1, _id: 0 }
      ); // Retrieve subscribers with only the name and subscribedChannel fields from the schema/model
      res.status(200).json(subscribers); // Send the subscribers as a JSON response with a status of 200 (OK)
    } catch (err) {
      res.status(400); // Set the response status to 400 (Bad Request)
      next(err); // Pass the error to the error handling middleware
    }
  });
  
  // THIS ROUTE PROVIDES THE DETAILS OF SUBSCRIBER WITH THE GIVEN ID.
  app.get("/subscribers/:id", async (req, res) => {
    try {
      const id = req.params.id; // Extract the ID parameter from the request URL
      if (!id) {
        res.status(400).json({ message: "No ID provided" }); // Send a JSON response with a status of 400 (Bad Request)
        return;
      }
      const subscriber = await schema.findById(id); // Find a subscriber with the given ID in the schema/model
      if (!subscriber) {
        res.status(404).json({ message: "Subscriber not found" }); // Send a JSON response with a status of 404 (Not Found)
        return;
      }
      res.send(subscriber); // Send the subscriber details as the response
    } catch (error) {
      res.status(400).json({ message: error.message }); // Send a JSON response with a status of 400 (Bad Request) and the error message
    }
  });
  
  // HANDLES ALL THE UNWANTED REQUESTS.
  app.use((req, res) => {
    res.status(404).json({ message: "Error - Route not found" }); // Send a JSON response with a status of 404 (Not Found)
  });
  
  module.exports = app;

