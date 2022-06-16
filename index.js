
//MousePress EventListener
var buttonNumber  = document.getElementsByClassName("tom").length;
console.log(buttonNumber);

for(var i=0; i<buttonNumber; i++){
    document.getElementsByClassName("tom")[i].addEventListener("click", function(){
        // alert("I got clicked " + this.innerHTML) 
        var buttonText = this.innerHTML;
        audioKey(buttonText);
        addAnimation(buttonText);
       

        })    
}


//KeyPress EventListener

// keypress is an event which addded directly to the whole document 
//event is parameter which got trigerred when we do keypress
//event has many properties and key is one of its property

document.addEventListener("keypress" , function(event){
    // console.log(event)
    // console.log("The key got presssed")
    console.log(event.key)
    audioKey(event.key);
    addAnimation(event.key);

})


function audioKey(key){
    switch(key){
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
        break;
        case "b":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
        break;
        case "c":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
        break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
        break;
        case "e":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
        break;
        case "f":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
        break;
        case "g":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
        break;

    }
}


function addAnimation(keyValue){
    var buttonSelector = document.querySelector("."+keyValue)
    buttonSelector.classList.add("pressed");
    setTimeout(function(){
        buttonSelector.classList.remove("pressed");
    },100)

}



//Extra practice of adding Animation-class tothe element
// document.querySelector(".mycreate").addEventListener("click" , function(){
//     addAnimation1();
//     alert("footer got cliked")
// })
// function addAnimation1 (){
//     document.querySelector(".mycreate").classList.add("press")
// }



















