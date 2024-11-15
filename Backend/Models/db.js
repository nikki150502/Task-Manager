const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB;

mongoose.connect(DB_URL).then(() => {
    console.log("Successfully connected  database");
}).catch((error) => {
    console.error("Database connection failed:", error.message);
});
