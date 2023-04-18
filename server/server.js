require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


/**DB connection config */
// mongoose.connect('mongodb://localhost/keka');
// const db = mongoose.connection;
// db.on('error', (error) => {
//     console.error(`Db connection Error: ${error}`);
// });
// db.once('open', () => {
//     console.log(`Db connection Sucessful`);
// });
/**DB connection config end*/


app.use(express.json());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

/**Router config */
const router = require('./routes/');
app.use('/v1', router);
/**Router config end*/

app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server started on port ${process.env.PORT}`)
});