
async function handleSubmit(event) {
    event.preventDefault()
    let url = document.getElementById('url').value

    if (!Client.checkForURL(url)) {
        document.getElementById('results').innerHTML = "URL is not correct"
    }
    else {
        let res = await fetch("http://localhost:8081", {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "url": url }),
        })
        let res_json = await res.json()
        console.log(res_json)
        document.getElementById('results').innerHTML = res_json.summary
    }

}

export { handleSubmit }
