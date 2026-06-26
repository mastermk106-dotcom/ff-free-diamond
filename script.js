function claimdiamonds(){

let uid=document.getElementById("uid").value;
let server=document.getElementById("server").value;

if(uid==""){
document.getElementById("result").innerHTML="❌ Please enter your UID";
return;
}

document.getElementById("result").innerHTML=
"✅ UID: "+uid+"<br>🌍 Server: "+server+"<br>🎁 Demo request submitted successfully!";
}
