
document.getElementById('cash-out-button')
    .addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('cash-out-form').classList.remove('hidden');
    });

document.getElementById('add-money-button')
    .addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('cash-out-form').classList.add('hidden');
        document.getElementById('add-money-form').classList.remove('hidden');
    });