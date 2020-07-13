// Express to reun server and routes
const express = require('express');

// Start an instance of app
const app = express();

/* Depenencies */
const bodyParser = require('body-parser');
/* Middleware */
// Configuring express to use body-parser as Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
})
// The same by arrow function
// app.get('/', (req, res) => res.send('Hello World!'))

// const appData = { firstName: 'Sondos', lastName: 'Sami', age: 25 };
const appData = {};
app.get('/all', (req, res) => res.send(appData))

const port = 8080;
// Sign up the server
const server = app.listen(port, listening);
// Callback to debug
function listening() {
    console.log("Server Running");
    console.log(`running on localhost: ${port}`);
}
// The same by arrow function
// const server = app.listen(port, () => { console.log(`running on localhost: ${port}`) })

// ****************************************************************************************************

// const express = require('express');

// const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const cors = require('cors');
// app.use(cors());

// const port = 8000;

// const server = app.listen(port, () => { console.log(`Server is running on: ${port}`) })

// ****************************************************************************************************

// /* Empty JS object to act as endpoint for all routes */
// projectData = {};

// // Express to run server and routes
// const express = require('express');

// // Start up an instance of app
// const app = express();

// /* Dependencies */
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Cors for cross origin allowance
// const cors = require('cors');
// app.use(cors());

// /* Initializing the main project folder */
// app.use(express.static('website'));

// const port = 3000;

// // TODO-Spin up the server
// const server = app.listen(port, listening);
// function listening() {
//     // console.log(server);
//     console.log(`running on localhost: ${port}`);
// };



