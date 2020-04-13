import {
    checkForUrl
} from './checkForUrl'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value;
    const checkUrl = Client.checkForUrl(formUrl);
    if postData('http://localhost:8080/sentiment-analysis', {
        url
    }).then(function (data) {
        updateUI(data);
    });
} else {
    document.getElementById('url').innerHTML = "The URL entered by you is not valid";
    return false;
}
// function validate() {
//     var url = document.getElementById("url").value;

//     if (pattern.test(url)) {
//         alert("Url is valid");
//         return true;
//     } 
//         alert("Url is not valid!");
//         return false;
// }

const postData = async (url = '', data = {}) => {
    try {
        return await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    } catch (error) {
        console.log('error', error);
    }
};

const updateUI = async (input) => {
    document.getElementById('polarity').innerHTML = input.polarity;
    document.getElementById('polConfidence').innerHTML = input.polConfidence;
    document.getElementById('subjectivity').innerHTML = input.subjectivity;
    document.getElementById('subConfidence').innerHTML = input.subConfidence;
    document.getElementById('text').innerHTML = input.text;

};



export {
    handleSubmit
}