const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('helloworld');
});

app.listen(3333)