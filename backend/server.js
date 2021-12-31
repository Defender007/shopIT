const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

// setting up config file...
dotenv.config({path: 'backend/config/config.env'})


// connecting to database...
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})

//... Handle Unhandled Promise rejections...
// ...this did not work as described in tutorial
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the Server due to Unhandled Promise rejections');
    server.close((err) => {
        console.log(`ERROR: ${err.message}`);
        process.exit(1)
    });
})