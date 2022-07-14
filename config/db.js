const mongooose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

/*
const connectDB = () => {
    mongooose
        .connect(db)
        .then(() => console.log('MongoDB connected'))
        .catch(err => {
            console.error(err.message);
            process.exit(1);
        });
};
*/

const connectDB = async () => {
    try {
        await mongooose.connect(db);

        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
