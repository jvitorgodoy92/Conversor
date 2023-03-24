const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.3
const euro = 5.74
const bitcoin = 149307.36
const iene = 0.041
const pesoArg = 0.026

const convertValues = () => {
    const inputReais = document.getElementById('input-in').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)

    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === "BTC Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }

    if (select.value === "¥ Iene") {
        currencyValueText.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(inputReais / iene)
    }

    if (select.value === "ARS - Peso Argentino") {
        currencyValueText.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
        }).format(inputReais / pesoArg)
    }


}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assests/eua-icon.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assests/euro-icon.png"
    }

    if (select.value === "BTC Bitcoin") {
        currencyName.innerHTML = "BTC Bitcoin"
        currencyImg.src = "./assests/bitcoin-icon.png"
    }

    if (select.value === "¥ Iene") {
        currencyName.innerHTML = "Iene"
        currencyImg.src = "./assests/iene-icon.png"
    }

    if (select.value === "ARS - Peso Argentino") {
        currencyName.innerHTML = "ARS"
        currencyImg.src = "./assests/argentina-icon.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

