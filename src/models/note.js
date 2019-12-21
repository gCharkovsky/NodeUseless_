import mongoose from "mongoose";

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

const NoteSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String },
    text: { type: String },
    color: { type: String }
});

NoteSchema.statics.findByLocationOrCreate = async function(location) {
    let note = await this.findOne({ location });
    if (!note) note = await this.create({ location });
    return note;
};

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;