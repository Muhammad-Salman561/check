// let userInput = document.getElementById('usermarks');
// let submitBtn = document.getElementById("submit");
// let divEle = document.createElement("div");
// let Username = document.getElementById("name");


// // let user = Username.value;
// // console.log(user);


//  function marksheet(){
     
//     let userVal = userInput.value
//     if (userVal >= 500) {
//         document.write("<h1>Congratulations <br />your grade is A+</h1>");

//     }else if(userVal >= 400){
//         document.write("<h1> Good your grade is A</h1>");
//     }

//     else if(userVal >= 300){
//         document.write("<h1>your grade is B </h1>");
//     }
//     else if(userVal >= 200){
//         document.write("<h1>your grade is C </h1>");
//     }
//     else {
//         document.write("<h1>Sorry you are fail</h1>");
//     }


//  }
    










// }

// let x = 15;


// if(x > 30){
//     document.write("1st")
// }else{
//     document.write("2nd")
// }



let userInput = document.getElementById('usermarks');
let submitBtn = document.getElementById("submit");
let divEle = document.createElement("div");
let Username = document.getElementById("name");


// let user = Username.value;
// console.log(user);


 function marksheet(){
     
    let userVal = userInput.value
    if (userVal >= 500) {
        document.write("<h1>Congratulations <br />your grade is A+</h1>");

    }else if(userVal >= 400){
        document.write("<h1> Good your grade is A</h1>");
    }

    else if(userVal >= 300){
        document.write("<h1>your grade is B </h1>");
    }
    else if(userVal >= 200){
        document.write("<h1>your grade is C </h1>");
    }
    else {
       document.write("<h1>Sorry you are fail</h1>");
     }


 }
     

 let x = 15;


 if(x > 30){
     document.write("1st")
 }else{
     document.write("2nd")

    }