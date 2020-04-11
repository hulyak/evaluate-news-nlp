export default async function request(text) {
    try {
        const response = await fetch('http://localhost:8080/sentiment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        });
        if (response.ok) {
            const jsonRes = await response.json();
            return jsonRes;
        }
    } catch (error) {
        console.log(error);
    }
}