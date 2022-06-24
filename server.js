const express = require('express');

const app = express();

const PORT = 8000;

const colors = {
    red: {
        hex: '#FF0000',
        rgb: 'rgb(255, 0, 0)'
    },
    orange: {
        hex: '#FFA500',
        rgb: 'rgb(255, 165, 0)'
    },
    yellow: {
        hex: '#FFFF00',
        rgb: 'rgb(255, 255, 0)'
    },
    purple: {
        hex: '#800080',
        rgb: 'rgb(128, 0, 128)'
    },
    green: {
        hex: '#008000',
        rgb: 'rgb(0, 128, 0)'
    },
    blue: {
        hex: '#0000FF',
        rgb: 'rgb(0, 0, 255)'
    },
    brown: {
        hex: '#A52A2A',
        rgb: 'rgb(165, 42, 42)'
    },
    white: {
        hex: '#FFFFFF',
        rgb: 'rgb(255, 255, 255)'
    },
    gray: {
        hex: '#808080',
        rgb: 'rgb(128, 128, 128)'
    },
    black: {
        hex: '#000000',
        rgb: 'rgb(0, 0, 0)'
    }
};

const error = {
    message: 'Color not found'
}

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:colorName', (req, res) => {

    const colorName = req.params.colorName.toLowerCase();

    res.json( colors[colorName] ? colors[colorName] : error );

});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});