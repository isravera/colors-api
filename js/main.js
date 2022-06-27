document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {

    document.getElementById('results').innerHTML = '';

    const color = document.querySelector('input').value;

    if(color.length <= 0) {
        return false;
    }

    try {

        const response = await fetch(`https://koltuz-colors-api.herokuapp.com/api/${color}`);

        const data = await response.json();

        if(data['message']) {
            document.getElementById('results').innerHTML = data.message;
        } else {

            document.getElementById('results').innerHTML = `<h3>${data.color}</h3>${data.hex}<p></p><p>${data.rgb}</p>`;

        }
        
    } catch (error) {

        console.error(error)        
    }
}