import Note from './../models/note.js'

export function get_notes() {
    let notes = Note.find();
    console.log(notes);
}

export function get_note(id) {
    let note = Note.find({id: id});
    console.log(note);
}

export function add_note(note) {
    note.id = Date.now();
    console.log("Added ID"+note.id);
    var new_note = new Note(note);
    new_note.save((err)=>{
        if(err){
            console.log("can't add note");
        }
    });
}

export function update_note(note) {
    Note.findOneAndUpdate({id: note.id}, note)
}

export function delete_note(id) {
    Note.findOneAndDelete({id: id})

}