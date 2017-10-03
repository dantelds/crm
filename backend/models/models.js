exports = module.exports = function(app, mongoose) {
	var models = ['./partner', './user'];
	models.forEach(function(model){
		require(model)(app, mongoose);
	});
};
