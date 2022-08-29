var x = localStorage.getItem("mistakes1");
var y = localStorage.getItem("mistakes2");
var z = localStorage.getItem("mistakes3");

let subX = x.substr(1, x.length-2);
let subY = y.substr(1, y.length-2);
let subZ = z.substr(1, z.length-2);


//איקון ראשון
var e=document.createElement("i");
e.className=localStorage.getItem("mistakes4").replace(/["]/g, '');
var answers=document.getElementById("answer1");
answers.append(e);
document.getElementById("answer4").innerHTML =subX+" <br>" +" <br>";
//איקון שני
var r=document.createElement("i");
r.className=localStorage.getItem("mistakes5").replace(/["]/g, '');
var answerss=document.getElementById("answer2");
answerss.append(r);
document.getElementById("answer5").innerHTML =subY+" <br>"+" <br>" ;
//איקון שלישי
var q=document.createElement("i");
q.className=localStorage.getItem("mistakes6").replace(/["]/g, '');
var answersss=document.getElementById("answer3");
answersss.append(q);
document.getElementById("answer6").innerHTML =subZ+" <br>";
// document.getElementById("answer1").innerHTML =subX+" <br>" ;

// document.getElementById("answer2").innerHTML =subY+" <br>" ;

// document.getElementById("answer3").innerHTML =subZ+" <br>";


//pictures
// var aimg = localStorage.getItem("myimg0");

// console.log(aimg);
// var bimg = localStorage.getItem("myimg1");
// var cimg = localStorage.getItem("myimg2");
// var dimg = localStorage.getItem("myimg3");
// var eimg = localStorage.getItem("myimg4");
// var imgarr = [aimg, bimg, cimg, dimg, eimg];

// let subX = x.substr(1, x.length-2);
// let subY = y.substr(1, y.length-2);
// let subZ = z.substr(1, z.length-2);

// var h="fab fa-google";
// document.getElementsById("anser").innerHTML="h"



// var myHTML =
//  wordsX[1] + wordsX[2]+ `<br>` +
//   wordsY[1] + wordsY[2]+ `<br>` +
//  wordsZ[1]+ wordsZ[2]; 

// document.getElementById("answer").innerHTML = myHTML;




// var e = localStorage.getItem("mistakes4");
// console.log(e);
// var e=`<i class={localStorage.getItem("mistakes4")}></i>`;
// console.log(e);
// document.getElementsById("answer").innerHTML=e;
// console.log(localStorage.getItem("mistakes4"));