document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {

    const color = document.querySelector('input').value;

    if(color.length <= 0) {
        return false;
    }

    try {

        const response = await fetch(`https://koltuz-colors-api.herokuapp.com/api/${color}`);

        const data = await response.json();

        document.getElementById('results').innerHTML = data;
        
    } catch (error) {

        console.error(error)        
    }
}