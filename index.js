
for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.getElementsByTagName("button")[i].addEventListener("click", soundOn);
}

function soundOn() {
    switch (this.innerHTML) {
        case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            document.querySelector(".w").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".w").classList.remove("pressed"), 0.12
            })
            break;
        case "a": 
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            document.querySelector(".a").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".a").classList.remove("pressed"), 0.12
            })
            break;
        case "s": 
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            document.querySelector(".s").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".s").classList.remove("pressed"), 0.12
            })
            break;
        case "d": 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            document.querySelector(".d").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".d").classList.remove("pressed"), 0.12
            })
            break;
        case "j": 
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            document.querySelector(".j").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".j").classList.remove("pressed"), 0.12
            })
            break;
        case "k": 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelector(".k").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".k").classList.remove("pressed"), 0.12
            })
            break;
        case "l": 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            document.querySelector(".l").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".l").classList.remove("pressed"), 0.12
            })
            break;
    } 
}

document.addEventListener("keydown", function soundOn(event) {
    switch (event.key) {
        case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            document.querySelector(".w").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".w").classList.remove("pressed"), 0.12
            })
            break;
        case "a": 
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            document.querySelector(".a").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".a").classList.remove("pressed"), 0.12
            })
            break;
        case "s": 
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            document.querySelector(".s").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".s").classList.remove("pressed"), 0.12
            })
            break;
        case "d": 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            document.querySelector(".d").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".d").classList.remove("pressed"), 0.12
            })
            break;
        case "j": 
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            document.querySelector(".j").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".j").classList.remove("pressed"), 0.12
            })
            break;
        case "k": 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelector(".k").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".k").classList.remove("pressed"), 0.12
            })
            break;
        case "l": 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            document.querySelector(".l").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".l").classList.remove("pressed"), 0.12
            })
            break;
    }     
});
