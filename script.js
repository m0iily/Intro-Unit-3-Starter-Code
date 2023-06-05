/* Declare variables below to save the different sections (divs) of your story*/
let buttonOne=document.querySelector(".option-one")
let partOne=document.querySelector(".partOne")
let badTwo=document.querySelector(".option-one-screen")
let goodTwo=document.querySelector (".option-two-screen")
let badEnd=document.querySelector (".option-one-end")
let goodEnd=document.querySelector (".option-two-end")
let buttonTwo=document.querySelector (".option-two") 
let nextOne=document.querySelector (".nextOne")
let nextTwo=document.querySelector (".nextTwo")
let cafe=document.querySelector (".cafe")


buttonOne.onclick=function(){
  partOne.style="display:none";
  badTwo.style="display:block";
  document.body.style.backgroundImage = "url('stove.jpg')";

}

buttonTwo.onclick=function(){
  partOne.style="display:none";
  goodTwo.style="display:block";
    document.body.style.backgroundImage = "url('closet.jpg')";

}

nextOne.onclick=function(){
  badTwo.style="display:none"
  badEnd.style="display:block";
    document.body.style.backgroundImage = "url('3331004.jpg')";

}

nextTwo.onclick=function(){
  goodTwo.style="display:none"
  goodEnd.style="display:block"
  document.body.style.backgroundImage = "url('cafe.jpg')";
}










/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
