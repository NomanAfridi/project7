    const amount = document.getElementById('amount')
    const guests = document.getElementById('guests')
    const quality = document.getElementById('quality')
    const tipAmount = document.getElementById('tipAmount')


    calculate = ()=>{
        var tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
        amount.value = '';
        guests.value = '';
        quality.value = '';
        if(tip===NaN){
                tipAmount.innerHTML = 'Tip $0 each';
                showTipAmount();
        }
        else{
            tipAmount.innerHTML = 'tip $' + tip + 'each';
            showTipAmount();
        }
    }
    showTipAmount = ()=>{
        var x = tipAmount;
        x.className = 'show';
        setTimeout(function(){x.className = x.className.replace('show','');},3000)
    }