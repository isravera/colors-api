const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 8000;

app.use(cors());

const colors = {
    red: {
        color: 'red',
        hex: '#FF0000',
        rgb: 'rgb(255, 0, 0)'
    },
    orange: {
        color: 'orange',
        hex: '#FFA500',
        rgb: 'rgb(255, 165, 0)'
    },
    yellow: {
        color: 'yellow',
        hex: '#FFFF00',
        rgb: 'rgb(255, 255, 0)'
    },
    purple: {
        color: 'purple',
        hex: '#800080',
        rgb: 'rgb(128, 0, 128)'
    },
    green: {
        color: 'green',
        hex: '#008000',
        rgb: 'rgb(0, 128, 0)'
    },
    blue: {
        color: 'blue',
        hex: '#0000FF',
        rgb: 'rgb(0, 0, 255)'
    },
    brown: {
        color: 'brown',
        hex: '#A52A2A',
        rgb: 'rgb(165, 42, 42)'
    },
    white: {
        color: 'white',
        hex: '#FFFFFF',
        rgb: 'rgb(255, 255, 255)'
    },
    gray: {
        color: 'gray',
        hex: '#808080',
        rgb: 'rgb(128, 128, 128)'
    },
    black: {
        color: 'black',
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

app.get('/js/main.js', (req, res) => {
    
    res.sendFile(__dirname + '/js/main.js');
});

app.get('/api', (req, res) => {

    res.json(colors);
});

app.get('/api/:colorName', (req, res) => {

    const colorName = req.params.colorName.toLowerCase();

    res.json( colors[colorName] ? colors[colorName] : error );

});

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`);
});