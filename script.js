const currencuEl_one = document.getElementById('currency-one')
const amountEl_one = document.getElementById('amount-one')
const currencuEl_two = document.getElementById('currency-two')
const amountEl_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

// Fetch exchange rates and update the DOM

function caclulate() {
  const currency_one = currencuEl_one.value
  const currency_two = currencuEl_two.value

  //fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const rate = data.rates[currency_two]

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
    })
}

// Event listeners
currencuEl_one.addEventListener('change', caclulate)
amountEl_one.addEventListener('input', caclulate)
currencuEl_two.addEventListener('change', caclulate)
amountEl_two.addEventListener('input', caclulate)

swap.addEventListener('click', () => {
  const temp = currencuEl_one.value
  currencuEl_one.value = currencuEl_two.value
  currencuEl_two.value = temp
  caclulate()
})
caclulate()
