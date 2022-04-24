document.addEventListener("keydown", function (keyPress){
    let keySound;
    // console.log(keyPress);
    switch (keyPress.code){
        case ('KeyA'):
            keySound = new Audio("white_keys/A.mp3");
            keySound.play();
            // console.log("The '" + keyPress.key + "' key was pressed ");
            break;
        case ('KeyS'):
            keySound = new Audio("white_keys/S.mp3");
            keySound.play();
            break;
        case ('KeyD'):
            keySound = new Audio("white_keys/D.mp3");
            keySound.play();
            break;
        case ('KeyF'):
            keySound = new Audio("white_keys/F.mp3");
            keySound.play();
            break;
        case ('KeyG'):
            keySound = new Audio("white_keys/G.mp3");
            keySound.play();
            break;
        case ('KeyH'):
            keySound = new Audio("white_keys/H.mp3");
            keySound.play();
            break;
        case ('KeyJ'):
            keySound = new Audio("white_keys/J.mp3");
            keySound.play();
            break;
        case ('KeyW'):
            keySound = new Audio("black_keys/W.mp3");
            keySound.play();
            break;
        case ('KeyE'):
            keySound = new Audio("black_keys/E.mp3");
            keySound.play();
            break;
        case ('KeyT'):
            keySound = new Audio("black_keys/T.mp3");
            keySound.play();
            break;
        case ('KeyY'):
            keySound = new Audio("black_keys/Y.mp3");
            keySound.play();
            break;
        case ('KeyU'):
            keySound = new Audio("black_keys/U.mp3");
            keySound.play();
            break;
        default:
            console.log("You pressed wrong key!");
    }
})