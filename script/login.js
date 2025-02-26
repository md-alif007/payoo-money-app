document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin').value;
        const convertedPin = parseInt(pinNumber);

        if (phoneNumber.length === 11) {
            if (convertedPin === 1234) {
                window.location.href = "./main.html"
            } else {
                alert("Pin is wrong");
            }
        } else {
            alert("Phone Number is wrong")
        }

    })