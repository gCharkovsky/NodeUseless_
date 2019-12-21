let express = require('express');
const app = express();

let noteController = require('./src/controllers/note');

app.get('/note/', (req, res) => {
    res.send(JSON.stringify(noteController.get_notes()));
});
app.get('/note/[0-9]+', (req, res) => {
    res.send(JSON.stringify(noteController.get_note(parseInt(req.url.toString().substring(6)))));
});

app.post('/note/', (req, res) => {
    res.send(JSON.stringify(    ));
});
app.post('/note/[0-9]+', (req, res) => {
    res.send(JSON.stringify());

});

app.delete('/note/[0-9]+', (req, res) => {
    res.send(JSON.stringify());

});

const server = app.listen(8080, () => {
    console.log(`Server is up and running on port 8080`);
});