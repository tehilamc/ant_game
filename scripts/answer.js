var x = localStorage.getItem("mistakes1");
var y = localStorage.getItem("mistakes2");
var z = localStorage.getItem("mistakes3");
<<<<<<< HEAD
let subX = x.substr(1, x.length-2);
let subY = y.substr(1, y.length-2);
let subZ = z.substr(1, z.length-2);
// var h="fab fa-google";
// document.getElementsById("anser").innerHTML="h";
document.getElementById("answer").innerHTML = subX +"  <br>"+ subY +" <br>"+ subZ;
=======

//pictures
var aimg = localStorage.getItem("myimg0");

// console.log(aimg);
var bimg = localStorage.getItem("myimg1");
var cimg = localStorage.getItem("myimg2");
var dimg = localStorage.getItem("myimg3");
var eimg = localStorage.getItem("myimg4");
var imgarr = [aimg, bimg, cimg, dimg, eimg];

var wordsX = x.split(';');
var wordsY = y.split(';');
var wordsZ = z.split(';');

// let subX = x.substr(1, x.length-2);
// let subY = y.substr(1, y.length-2);
// let subZ = z.substr(1, z.length-2);

// var h="fab fa-google";
// document.getElementsById("anser").innerHTML="h"


for (let i=0 ; i< imgarr.length; i++) {
    console.log(imgarr[i]);
    console.log(wordsX[1]);
    if (imgarr[i] == wordsX[1]) {
        var pic0 = wordsX[0] + `"`;
    }
    if (imgarr[i] == wordsY[1]) {
        var pic1 = wordsY[0] + `"`;
    }
    if (imgarr[i] == wordsZ[1]) {
        var pic2 = wordsZ[0] + `"`;
    }
}


var myHTML =
"<img src=" + pic0  + ">" +  wordsX[1] + wordsX[2]+ `<br>` +
"<img src=" + pic1  + ">" +  wordsY[1] + wordsY[2]+ `<br>` +
"<img src=" + pic2  + ">" +  wordsZ[1]+ wordsZ[2]; 

document.getElementById("answer").innerHTML = myHTML;




>>>>>>> main
