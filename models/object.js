var objectModel = function(connection) {
    var mongoose = require('mongoose');
    var referenceModel = mongoose.model('Reference');

    var objectSchema = mongoose.Schema({
        referece: { type: mongoose.Schema.Types.ObjectId, ref: 'Reference' }
    }, { collection: 'objects' });

    return connection.model('Object', objectSchema);
};
module.exports = objectModel;