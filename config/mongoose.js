const mongoose = require("mongoose");
const beatufyUnique = require("mongoose-beautiful-unique-validation");

mongoose.Promise = Promise;
mongoose.set("debug", true);

mongoose.plugin(beatufyUnique);
module.exports.mongoose = mongoose;
