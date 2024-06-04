// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db.conf'); // Import the DB configuration
// const userRoute = require('./routes/user-route');

// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Middleware for CORS
// app.use(cors({
//   origin: 'http://localhost:4200'
// }));

// // Use routes
// app.use('/api/users', userRoute);

// // Connect to the database
// connectDB();

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.conf');
const userRoute = require('./routes/user-route');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for CORS
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Connect to the database
connectDB();

// Use routes
app.use('/', userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
