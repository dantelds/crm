exports = module.exports = function(app, mongoose) {
	var partnerSchema = new mongoose.Schema({
      name: 		{ type: String },
      lastname: 		{ type: String }
	});
	mongoose.model('partner', partnerSchema);
};
