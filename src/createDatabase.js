const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
require('dotenv').config();
// Connect to DATABASE
const DATABASE_URL = process.env.URL;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))
const refreshAll = async () => {
    try {
      await subscriberModel.deleteMany({});
      const insertResult = await subscriberModel.insertMany(data);
      console.log('Data inserted successfully:', insertResult);
    } catch (error) {
      console.error('Error inserting data:', error);
    } finally {
      await mongoose.disconnect();
    }
  };
  
  refreshAll();
  
  