const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI environment variable is required');
        }

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;