function changeColors(){
  var redBordNum = document.getElementById("redBord").value;
  var greenBordNum = document.getElementById("greenBord").value;
  var blueBordNum = document.getElementById("blueBord").value;
  var bordWidth = document.getElementById("widthBord").value;
  var redBackNum = document.getElementById("redBack").value;
  var greenBackNum = document.getElementById("greenBack").value;
  var blueBackNum = document.getElementById("blueBack").value;

  if((redBordNum > 255 || redBordNum < 0) || (greenBordNum > 255 || greenBordNum < 0) || (blueBordNum > 255 || blueBordNum < 0) || (redBackNum > 255 || redBackNum < 0) || (greenBackNum > 255 || greenBackNum < 0) || (blueBackNum > 255 || blueBackNum < 0) || (bordWidth > 10 || bordWidth < 0)){
    alert("Value not in range given!");
  }else{
    var par = document.getElementById("paragraph");
    par.style.backgroundColor= 'rgb(' + redBackNum + ',' + greenBackNum + ',' + blueBackNum + ')';
    par.style.borderColor= 'rgb(' + redBordNum + ',' + greenBordNum + ',' + blueBordNum + ')';
    par.style.borderWidth= bordWidth + 'px';
  }


}
