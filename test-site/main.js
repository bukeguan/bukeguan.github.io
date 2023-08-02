//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'savior';

let myImage = document.querySelector('img');
myImage.onclick = ()=> {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bukeguan.jpg') {
      myImage.setAttribute('src', 'images/Nanao Hibiya.png');
    } else {
      myImage.setAttribute('src', 'images/bukeguan.jpg');
    }
}

document.querySelector("img").addEventListener("click",()=> {
    alert("hurt！");
  });
  
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    while(1) {
       let myName = prompt('type your name。');
       if(!myName || myName === null) {
        break;
       } else {
       localStorage.setItem('name', myName);
       myHeading.textContent = 'Love' + myName;
       break;
       }
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Love' + storedName;
  }

myButton.onclick = setUserName;
myButton.onclick;
 

