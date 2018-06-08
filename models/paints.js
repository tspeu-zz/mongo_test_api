const mongoose = require('mongoose');

const schema = mongoose.Schema;

/* id por MOngo cada elemnto insertado */

const PaintingShema = new schema({
    name: String,
    url: String,
    techniques: [String]
});

module.exports = mongoose.model('Painting', PaintingShema);