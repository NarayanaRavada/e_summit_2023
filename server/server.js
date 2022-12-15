const mongoose = require('mongoose');

/* importing environment variables */
const dotenv = require('dotenv');

/* configuring environment variables */
dotenv.config();

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database connection successful!!');
  })
  .catch(err => console.log(err));

/* listening to server */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
