// console.log(document.getElementById("answer"));
// import 'scripts/page.js'
// console.log(mistakes[i]);
// var mis = [];
// function writeOnScreen() {
//     var ans = document.getElementById("ans");
//     console.log("I am ");
//     for (var j = 0; j < 3; j++) {
//         console.log(mis[j] + "aaa");
//         ans.innerHTML = mis[j];
//     }
// }

function printMistakes() {
    var ans = document.getElementById("ans");
    // const answer = document.createElement('answer');
    // answer.id = 'result';
    for (var i = 0; i < mistakes.length; i++) {
        console.log(mistakes[i]);
                ans.innerHTML = mistakes[i];

        // mis[i] = mistakes[i];
        // answer.innerHTML = mistakes[i];
    }
    // var ans= document.getElementById("answer");
    // console.log(ans);
    // ans.innerHTML =mistakes;
    // console.log(mistakes);
}