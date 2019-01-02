//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);
const loader = document.getElementById('loader');
const results = document.getElementById('results');

//Calculate results
function calculateResults(e){
    //UI variables
    const amount = document.getElementById('loan-amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);

    e.preventDefault();
}