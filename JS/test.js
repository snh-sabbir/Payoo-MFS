document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Clicked");

    const amount = document.getElementById('amount').value;
    const amountNumber = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const pinNumber = parseFloat(pin);
    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance);

    if (pinNumber == '1212') {
        const updateBalance = amountNumber + accountBalanceNumber;
        console.log(updateBalance);
        document.getElementById('account-balance').innerHTML = updateBalance;
    }else{
        alert("Wrong pin or number.");
    }
});


document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log("Btn clicked");

    const inputAmount = document.getElementById('input-amount').value;
    const inputAmountNumber = parseFloat(inputAmount);
    const inputPin = document.getElementById('input-pin').value;
    const inputPinNumber = parseFloat(inputPin);
    const accBalance = document.getElementById('account-balance').innerHTML;
    const accBalanceNumber = parseFloat(accBalance);

    if(inputPinNumber == '1212'){
        const updateBal = accBalanceNumber - inputAmountNumber;
        document.getElementById('account-balance').innerHTML = updateBal;
    }else{
        alert("Wrong pin or number.");
    }

});