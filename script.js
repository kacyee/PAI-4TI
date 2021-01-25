const text = "Prezentacja funkcji która wypisze tekst litera po literze.";

let index = 0;

function writeLitterByLetter() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeLitterByLetter, 100);