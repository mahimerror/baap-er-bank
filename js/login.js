document.getElementById('sub-btn').addEventListener('click',function(){
    const email=document.getElementById('email').value;
    const pass=document.getElementById('pass').value;
    if(email.toLowerCase()==="boropola@baap.com" && pass==="secret"){
        window.location.href= 'bank.html';
    }
    else{
        alert("invalid user");
    }
})
