document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositValueStr=document.getElementById('deposit-field').value;
    if(depositValueStr==='')
        return;
    const depositValue=parseFloat(depositValueStr);
    if(depositValue<0){
        alert("invalid deposit");
        return;
    }

    const preDepositStr=document.getElementById('deposit').innerText;
    const preDeposit=parseFloat(preDepositStr);

    const preBalanceStr=document.getElementById('balance').innerText;
    const preBalance=parseFloat(preBalanceStr);

    document.getElementById('deposit').innerText= depositValue+preDeposit;
    document.getElementById('balance').innerText= preBalance+depositValue;
    document.getElementById('deposit-field').value= '';
})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawValueStr=document.getElementById('withdraw-field').value;
    if(withdrawValueStr==='')
        return;
    const withdrawValue=parseFloat(withdrawValueStr);

    const preWithdrawStr=document.getElementById('withdraw').innerText;
    const preWithdraw=parseFloat(preWithdrawStr);

    const preBalanceStr=document.getElementById('balance').innerText;
    const preBalance=parseFloat(preBalanceStr);
    if(withdrawValue<0 || preBalance<withdrawValue){
        alert("invalid withdraw");
        return;
    }

    document.getElementById('withdraw').innerText= withdrawValue+preWithdraw;
    document.getElementById('balance').innerText= preBalance-withdrawValue;
    document.getElementById('withdraw-field').value= '';
})
