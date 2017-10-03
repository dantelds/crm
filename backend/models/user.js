exports = module.exports = function(app, mongoose) {
	var userSchema = new mongoose.Schema({
      username: 		{ type: String },
      password: 		{ type: String }
	});
	mongoose.model('users', userSchema);
};
