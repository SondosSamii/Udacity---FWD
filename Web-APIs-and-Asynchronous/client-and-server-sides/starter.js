/* Empty JS object to act as endpoint for all routes */
projectData = {};

// TODO L2 Set 2-Express to run server and routes

// TODO L2 Set 2-Start up an instance of app

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO L2 Set 2-Cors for cross origin allowance

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 3000;

// TODO L2 Set 3-Spin up the server




