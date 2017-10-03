var mongoose = require('mongoose');
var Partner = mongoose.model('partner');
var validator = {
  validatePartner: function(partner){
    if(!partner.name ||
      !partner.lastname){
      return false;
    }
    return true;
  }
};

exports.searchPartners = function (req, res) {
    var params = req.query,
        searchOptions = {};
    if(req.query.field){
        searchOptions[params.field] = params.search;
    }
    else{
        searchOptions['params.value'] = params.search
    }
    Partner.find(searchOptions, function (err, partners) {
        if (err)
            res.send(500, err.message);

        res.status(200).jsonp(partners);
    });
};



exports.createPartner = function (req, res) {
    console.log(req.body);
    var partner = new Partner({
        name: req.body.name,
        lastname: req.body.lastname
    });
    if(!validator.validatePartner(partner)){
      return res.status(400).send('error.empty.fields');
    }

    partner.save(function (err, partner) {
        if (err)
            return res.send(500, err.message);
        res.status(200).jsonp(partner);
    });
};

exports.updatePartner = function (req, res) {
     Partner.findById(req.params.id, function (err, partner) {
         partner.name = req.body.name;
         partner.lastname = req.body.lastname;
         partner.save(function (err) {
             if (err)
                 return res.send(500, err.message);
             res.status(200).jsonp(partner);
         });
     });
};

exports.deletePartner = function (req, res) {
     Partner.findById(req.params.id, function (err, partner) {
         partner.remove(function (err) {
             if (err)
                 return res.send(500, err.message);
             res.status(200);
         });
     });
};
