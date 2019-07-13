class App {
    constructor() {
        this.quote = document.querySelector('.quote');
        this.options = { 
            method: 'GET',
            url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
            headers: { 
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '0ce3eb5089mshac8c746d53e1878p1cf25bjsn312b9ef49878',
            }
        };
        this.doFetchTrumpQuotes();
    }

    doFetchTrumpQuotes = () => {
        return fetch('https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote', this.options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('HTTP error', response.status);
                    }
                    return response.json();
                })
                .then((response) => {
                    this.quote.textContent = response.value;
                    this.imageIndex++;
                    return response;
                })
                .catch((error) => {
                    console.error(error);
                })
    }
}

const launchApp = () => {
    new App();
}
new App();
setInterval(launchApp, 7000);
