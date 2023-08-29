# AlmaBetter Backend Project 

## Get_Youtube_Subscribers
This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

## API Endpoints 
1. **"/ "** -> This default route will render the "index.html file" when the app launches. http://localhost:3000/

## Installation 

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **nodemon index.js**

## Dependencies
Following dependencie are needed to run this application: 

1. express

2. mongoose

3. nodemon