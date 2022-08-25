var x = localStorage.getItem("mistakes1");
var y = localStorage.getItem("mistakes2");
var z = localStorage.getItem("mistakes3");
let subX = x.substr(1, x.length-2);
let subY = y.substr(1, y.length-2);
let subZ = z.substr(1, z.length-2);
document.getElementById("answer").innerHTML = subX +"  <br>"+ subY +" <br>"+ subZ;
