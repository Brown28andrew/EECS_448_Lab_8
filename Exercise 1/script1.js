

function testPw(){
  var pw1 = document.getElementById("p1").value;
  var pw2 = document.getElementById("p2").value;
  if(pw1.length >= 8){
    if(pw1 == pw2){
      alert("Congrats the passwords match!");
    }else{
      alert("Passwords do not match!");
    }
  }else{
    alert("Password is under 8 Characters!");
  }

}
