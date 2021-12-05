const express = require('express')
const server = express();

server.all('/', (req, res) => {
    res.send('<h2>Djs is ready!</h2>');
});

module.exports = () => {
    server.listen(3000, () => {
        console.log('Server Ready.');
    });
    return true;
}