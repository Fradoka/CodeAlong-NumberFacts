let fact = document.getElementById("fact");
let factText = document.getElementById("factText");
let numInput = document.getElementById("numberInput");

numInput.addEventListener("input", getFactFetch);

function getFactFetch() {
    let num = numInput.value;

    fetch(`http://numbersapi.com/`+ num)
        .then(response => response.text())
        .then(data => {
            if (num !== ""){
                fact.style.display = "block";
                factText.innerText = data;
            } else {
                fact.style.display = "none";
            }
        })
        .catch(err => alert(err));
}