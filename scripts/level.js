//A function intended for the light level,Keeps me level,Redirects to the level page
function easy(){
  localStorage.setItem("levelPlay", "1");
  window.location.replace('page.html');
}
//A function intended for the intermediate level,Keeps me level,Redirects to the level page
function normal(){
  localStorage.setItem("levelPlay", "2");
  window.location.replace('page.html');
}
//A function designed for the hard level,Keeps me level,Redirects to the level page
function hard(){
  localStorage.setItem("levelPlay", "3");
  window.location.replace('page.html');
}



