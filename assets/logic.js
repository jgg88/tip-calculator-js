let bill = document.querySelector('#bill-input');
let dropDownTip = document.querySelector('#select-tip-amount');
let customTipContainer = document.querySelector('#custom-tip-container');
let customTipInput = document.querySelector('#custom-tip-input');
let exitCustomTipBtn = document.querySelector('#exit-custom-tip');
let guestInput = document.querySelector('#guest-input');
let calculateBtn = document.querySelector('#calculate-button');
let validation = document.querySelector('#update-required');
let resultText = document.querySelector('#result');
let convertedCustomTip;

calculate = () => {
    let billAmount = bill.value;
    let tipAmount = dropDownTip.value != 'select' ? dropDownTip.value : convertedCustomTip;
    let guestNumber = guestInput.value;
    let total;

    if (guestNumber === '') {
        guestNumber = 1;
    }
    if (billAmount === '' || tipAmount === '' || tipAmount === '.') {
        resultText.style.display = 'none'
        validation.style.display = 'block';
    } else {
        validation.style.display = 'none'
        resultText.style.display = 'block';
        total = (billAmount * tipAmount) / guestNumber;
        guestNumber > 1 ? resultText.innerHTML = `$${total.toFixed(2)} each` : resultText.innerHTML = `$${total.toFixed(2)}`;
    }
}

calculateBtn.onclick = () => {
    calculate();
}

exitCustomTipBtn.onclick = () => {
    toggleTipOptions();
}

toggleTipOptions = () => {
    if (dropDownTip.value === 'custom') {
        dropDownTip.style.display = 'none';
        customTipContainer.style.display = 'flex';
        dropDownTip.value = 'select';
    } else {
        dropDownTip.style.display = 'flex';
        customTipContainer.style.display = 'none';
        customTipInput.value = '';
        convertedCustomTip = '';

    }
}

convertPercentage = () => {
    convertedCustomTip = customTipInput.value / 100;
}
