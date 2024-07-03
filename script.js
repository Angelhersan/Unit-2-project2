// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector('.story-opening');
let optionSwordman = document.querySelector('.option-swordman');
let optionMage = document.querySelector('.option-mage');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionGoblin = document.querySelector('.option-goblin');
let optionDragon = document.querySelector('.option-dragon');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionArchmage = document.querySelector('.option-archmage');
let optionGoblin2 = document.querySelector('.option-goblin2');
let optionOneGoblin = document.querySelector('.option-one-goblin');
let optionBack = document.querySelector('.option-back');
let optionOneDragon = document.querySelector('.option-one-dragon');
let optionTwoGoblin = document.querySelector('.option-two-goblin');
let optionEnd = document.querySelector('.option-end');
let optionTwoArchmage = document.querySelector('.option-two-archmage');
let optionOver = document.querySelector('.option-over');
let optionOver2 = document.querySelector('.option-over2');
let optionOver3 = document.querySelector('.option-over3');
let optionBack2 = document.querySelector('.option-back2');

optionSwordman.addEventListener("click", function(){
    storyOpening.style.display ="none";
    optionOneScreen.style.display = "block";
});


optionMage.addEventListener("click", function(){
    storyOpening.style.display ="none";
    optionTwoScreen.style.display = "block";
});


optionGoblin.addEventListener("click", function(){
    optionOneScreen.style.display ="none";
    optionOneGoblin.style.display = "block";
});


optionDragon.addEventListener("click", function(){
    optionOneScreen.style.display ="none";
    optionOneDragon.style.display = "block";
});


optionArchmage.addEventListener("click", function(){
    optionTwoScreen.style.display ="none";
    optionTwoArchmage.style.display = "block";
});


optionGoblin2.addEventListener("click", function(){
    optionTwoScreen.style.display ="none";
    optionTwoGoblin.style.display = "block";
});


optionBack.addEventListener("click", function(){
    optionOneGoblin.style.display ="none";
    optionEnd.style.display = "block";
});


optionOver.addEventListener("click", function(){
    optionOneDragon.style.display ="none";
    storyOpening.style.display = "block";
});


optionOver2.addEventListener("click", function(){
    optionEnd.style.display ="none";
    storyOpening.style.display = "block";
});

optionOver3.addEventListener("click", function(){
    optionTwoArchmage.style.display ="none";
    storyOpening.style.display = "block";
});


optionBack2.addEventListener("click", function(){
    optionTwoGoblin.style.display ="none";
    storyOpening.style.display = "block";
});





// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });