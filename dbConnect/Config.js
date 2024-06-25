const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connection Successful");
    } catch (err) {
        console.log("Error while connecting to DB:", err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
