const mongoose = require("mongoose");
const MONGO_DB= 'mongodb+srv://dbuser:mKIy1AGNXC5lgGE9@cluster0.2bzzu.mongodb.net/?retryWrites=true&w=majority'
module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(MONGO_DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
