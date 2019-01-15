let express = require('express');
let app = express();
let filestream = require('fs');

app.get('/', (request, response) => {
	response.send('Here to save the day...')
})


app.get('/heros', (request, response) => {
	let readstream = filestream.createReadStream('/heros/:superheros.json')
	readstream.send(response)
})


app.listen(3000)
