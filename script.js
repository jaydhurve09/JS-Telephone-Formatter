const numberInput = document.querySelector('.number-input')

numberInput.addEventListener('input', (e) => {
    let inputValue = e.target.value.replace(/\D/g, '');

    if (inputValue.length === 0) {
        numberInput.value = ''; // Reset to plain numbers when cleared
        return
    }
    
    if(inputValue.length > 3){
        numberInput.value = `+(${inputValue.substring(0, 3)}) - ${inputValue.substring(3)}`   
    } else {
        numberInput.value = inputValue;
    }
})