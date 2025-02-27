document.getElementById('cashout-section').style.display = 'none';

document.getElementById('add-money-box')
    .addEventListener('click', function (event) {
        event.preventDefault();

        document.getElementById('addmoney-section').style.display = 'block';
        document.getElementById('cashout-section').style.display = 'none';

    })

document.getElementById('cashout-money-box')
    .addEventListener('click', function (event) {
        event.preventDefault();

        document.getElementById('addmoney-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'block';

    })