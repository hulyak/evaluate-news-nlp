const searchFrom = document.querySelector('#search');
const input = document.getElementById('sentence');
const newslist = document.querySelector('.news-list')

searchFrom.addEventListener('submit', retrieve)

function retrieve(e) {
    if (input.value == '') {
        alert('Input field is empty');
        return;
    }
    e.preventDefault();
    const apiKey = '1e606fc9a83f04359f831e6fc7ab09e4';
    let url = `https://api.aylien.com/news/${topic}$apiKey=${apiKey}`;
    let topic = input.value;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
            console.log(data)
            data.articles(forEach(article => {
                    let li = document.createElement('li');
                    let a = document.createElement('a');
                    a.setAttribute('href', article.url);
                    a.setAttribute('target', '_blank');
                    a.textContent = article.title;
                    li.appendChild(a);
                    newslist.appendChild(li);
                })
            }).catch((error) => {
            console.log(error);
        })
    }

    export {
        retrieve
    }