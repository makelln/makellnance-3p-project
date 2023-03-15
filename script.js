/* Declare variables below to save the different sections (divs) of your story*/
let screenOne = document.querySelector(".option-one-screen");
let buttonOne = document.querySelector(".option-one");
let screenTwo = document.querySelector(".option-two-screen");
let buttonTwo = document.querySelector(".option-two");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");

buttonOne.onclick = function() {
    screenOne.style.display = "block";
    optionOneEnd.style.display="block";
    buttonTwo.disabled = true;
    
};

buttonTwo.onclick = function() {
    screenTwo.style.display = "block";
    optionTwoEnd.style.display="block";
    buttonOne.disabled = true;
};




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/