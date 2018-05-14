var referenceModel = function(connection) {
    var mongoose = require('mongoose');

    var referenceSchema = mongoose.Schema({
    }, { collection: 'references' });

    return connection.model('Reference', referenceSchema);
};
module.exports = referenceModel;