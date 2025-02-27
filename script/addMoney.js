document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAmount = document.getElementById('amount').value;
        const convertedAmount = parseInt(moneyAmount);

        const pin = document.getElementById('pin').value;
        convertedPin = parseInt(pin);

        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseInt(mainBalance);

        if (convertedPin === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        } else {
            alert('Pin is not correct');
        }
    })