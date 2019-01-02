//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);
const loader = document.getElementById('loader');
const results = document.getElementById('results');

//Calculate results
function calculateResults(e){
    //fake loader time in ms
    const time = 1000;
    //hiding previous results
    hideResults();
    //UI variables
    const amount = document.getElementById('loan-amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) /100 /12;
    const calculatedPayments = parseFloat(years.value) *12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
        showLoader();
        setTimeout(hideLoader, time);
        setTimeout(showResults, time);
    }else{
        M.toast({html: 'Please check your numbers'});
    }

    e.preventDefault();
}

function showLoader(time)
{
    if(loader.classList.contains('hide'))
    {
     loader.classList.remove('hide');   
    }
}
function hideLoader()
{
    if(!loader.classList.contains('hide'))
    {
     loader.classList.add('hide');   
    }
}

function showResults(){
    if(results.classList.contains('hide'))
    {
     results.classList.remove('hide');   
    }
}
function hideResults(){
    if(!results.classList.contains('hide'))
    {
     results.classList.add('hide');   
    }
}