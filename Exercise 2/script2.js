var imgNum = 0;
const images = ["painting1.jpg", "painting2.jpg", "painting3.jpg", "painting4.jpg", "painting5.jpg"];

function nextImg(){
  if(imgNum == 4){
    imgNum = 0;
    setPhoto(imgNum);
  }else{
    imgNum++;
    setPhoto(imgNum);
  }
}

function prevImg(){
  if(imgNum == 0){
    imgNum = 4;
    setPhoto(imgNum);
  }else{
    imgNum--;
    setPhoto(imgNum);
  }
}

function setPhoto(){
  document.getElementById("picture").src = images[imgNum];
}
