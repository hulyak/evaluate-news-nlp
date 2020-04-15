import {
    checkForUrl
} from './checkForUrl';

function handleSubmit(event) {
    event.preventDefault();

    let formUrl = document.getElementById('url').value;
    const checkUrl = Client.checkForUrl(formUrl);
    if (checkUrl) {
        postData('http://localhost:8081/sentiment', {
            url: formUrl
        }).then(function (data) {
            updateUI(data);
        });
        return true;

    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        try {
            const input = response.json();
            return postData;
        } catch (error) {
            console.log('error', error);
        }

    }

    const updateUI = async (input) => {
        document.getElementById('polarity').innerHTML = input.polarity;
        document.getElementById('polConfidence').innerHTML = input.polConfidence;
        document.getElementById('subjectivity').innerHTML = input.subjectivity;
        document.getElementById('subConfidence').innerHTML = input.subConfidence;
        document.getElementById('text').innerHTML = input.text;
    };

}
export {
    handleSubmit
}