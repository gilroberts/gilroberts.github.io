//variables and event listeners for the images
var sneakers = document.getElementById("sneaker"); 
var sClick = 0;
sneakers.addEventListener('click', initiateShoe);

var tshirt = document.getElementById("tshirt");
var tClick = 0;
tshirt.addEventListener('click', initiateShirt);

var shorts = document.getElementById("shorts");
var shClick = 0;
shorts.addEventListener('click', initiateShorts);

var skirt= document.getElementById("skirt");
var skClick = 0;
skirt.addEventListener('click', initiateSkirt);

var boots = document.getElementById("boots");
var bClick = 0;
boots.addEventListener('click', initiateBoots);

var cPants = document.getElementById("camoPants");
var cClick = 0;
cPants.addEventListener('click', initiatePants);

var cSkirt = document.getElementById("camoSkirt");
var cSClick = 0;
cSkirt.addEventListener('click', initiateCSkirt);

var top = document.getElementById("top");
var topClick = 0;
top.addEventListener('click', initiateTop);

var jersey = document.getElementById("jersey");
var jClick = 0;
jersey.addEventListener('click', initiateJersey);

var mShirt = document.getElementById("mShirt");
var mSClick = 0;
mShirt.addEventListener('click', initiateMShirt);

var rShorts = document.getElementById("rShorts");
var rClick = 0;
rShorts.addEventListener('click', initiateRShorts);

var tutu = document.getElementById("tutu");
var tuClick = 0;
tutu.addEventListener('click', initiateTutu);

//functions for the sneakers
function initiateShoe(){
    alert("the shoe was clicked");
    document.addEventListener('keydown', moveShoe);
    sClick +=1;
}
function moveShoe(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(sneakers);
                break;
            case 39:
                rightArrowPressed(sneakers);
                break;
            case 38:
                upArrowPressed(sneakers);
                break;
            case 40:
                downArrowPressed(sneakers);
                break;
    }
        
}

//functions for the tshirt
function initiateShirt(){
    alert("the shirt was clicked");
    document.addEventListener('keydown', moveShirt);
    tClick+=1;
}
function moveShirt(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(tshirt);
                break;
            case 39:
                rightArrowPressed(tshirt);
                break;
            case 38:
                upArrowPressed(tshirt);
                break;
            case 40:
                downArrowPressed(tshirt);
                break;
    }  
}

//functions for the shorts
function initiateShorts(){
    alert("the shorts were clicked");
    document.addEventListener('keydown', moveShorts);
    shClick+=1;
}
function moveShorts(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(shorts);
                break;
            case 39:
                rightArrowPressed(shorts);
                break;
            case 38:
                upArrowPressed(shorts);
                break;
            case 40:
                downArrowPressed(shorts);
                break;
    }  
}

//functions for the skirt
function initiateSkirt(){
    alert("the skirt was clicked");
    document.addEventListener('keydown', moveSkirt);
    skClick +=1;
}
function moveSkirt(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(skirt);
                break;
            case 39:
                rightArrowPressed(skirt);
                break;
            case 38:
                upArrowPressed(skirt);
                break;
            case 40:
                downArrowPressed(skirt);
                break;
    }  
}

//functions for the boots
function initiateBoots(){
    document.addEventListener('keydown', moveBoots);
    bClick +=1;
}
function moveBoots(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(boots);
                break;
            case 39:
                rightArrowPressed(boots);
                break;
            case 38:
                upArrowPressed(boots);
                break;
            case 40:
                downArrowPressed(boots);
                break;
    }  
}

//functions for the camo pants
function initiatePants(){
    document.addEventListener('keydown', moveCPants);
    cClick +=1;
}
function moveCPants(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(cPants);
                break;
            case 39:
                rightArrowPressed(cPants);
                break;
            case 38:
                upArrowPressed(cPants);
                break;
            case 40:
                downArrowPressed(cPants);
                break;
    }  
}

//functions for the camo skirt
function initiateCSkirt(){
    document.addEventListener('keydown', moveCSkirt);
    cSClick +=1;
}
function moveCSkirt(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(cSkirt);
                break;
            case 39:
                rightArrowPressed(cSkirt);
                break;
            case 38:
                upArrowPressed(cSkirt);
                break;
            case 40:
                downArrowPressed(cSkirt);
                break;
    }  
}

//functions for the top
function initiateTop(){
    document.addEventListener('keydown', moveTop);
    topClick +=1;
}
function moveTop(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(top);
                break;
            case 39:
                rightArrowPressed(top);
                break;
            case 38:
                upArrowPressed(top);
                break;
            case 40:
                downArrowPressed(top);
                break;
    }  
}

//functions for the jersey
function initiateJersey(){
    document.addEventListener('keydown', moveJersey);
    jClick +=1;
}
function moveJersey(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(jersey);
                break;
            case 39:
                rightArrowPressed(jersey);
                break;
            case 38:
                upArrowPressed(jersey);
                break;
            case 40:
                downArrowPressed(jersey);
                break;
    }  
}

//functions for the monkey shirt
function initiateMShirt(){
    document.addEventListener('keydown', moveMShirt);
    mSClick +=1;
}
function moveMShirt(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(mShirt);
                break;
            case 39:
                rightArrowPressed(mShirt);
                break;
            case 38:
                upArrowPressed(mShirt);
                break;
            case 40:
                downArrowPressed(mShirt);
                break;
    }  
}

//functions for the running shorts
function initiateRShorts(){
    document.addEventListener('keydown', moveRShorts);
    bClick +=1;
}
function moveRShorts(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(rShorts);
                break;
            case 39:
                rightArrowPressed(rShorts);
                break;
            case 38:
                upArrowPressed(rShorts);
                break;
            case 40:
                downArrowPressed(rShorts);
                break;
    }  
}

//functions for the tutu
function initiateTutu(){
    document.addEventListener('keydown', moveTutu);
    tuClick +=1;
}
function moveTutu(e){
    //alert("the key was pressed");
    var key_code=e.which||e.keyCode;
    switch (key_code) {
            case 37:
            //alert("left arrow key pressed");
                leftArrowPressed(tutu);
                break;
            case 39:
                rightArrowPressed(tutu);
                break;
            case 38:
                upArrowPressed(tutu);
                break;
            case 40:
                downArrowPressed(tutu);
                break;
    }  
}

//functions for the movement of the images 
function leftArrowPressed(element) {
    //alert("left function working");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArrowPressed(element) {
    //alert("right function working");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}

function upArrowPressed(element) {
    //alert("up function working");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArrowPressed(element) {
    //alert("down function working");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}

//removes the event handlers so that the next clothing item can be moved
function nextItem(){
    if(sClick == 1){
        //alert(sClick);
        sneakers.removeEventListener('click', initiateShoe);
        document.removeEventListener('keydown', moveShoe);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
        //alert(sClick);
    }
    else if (tClick == 1){
        tshirt.removeEventListener('click', initiateShirt);
        document.removeEventListener('keydown', moveShirt);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;            
    }
    else if (skClick == 1){
        skirt.removeEventListener('click', initiateSkirt);
        document.removeEventListener('keydown', moveSkirt);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else if (shClick == 1){
        shorts.removeEventListener('click', initiateShorts);
        document.removeEventListener('keydown', moveShorts);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }

    else if (bClick ==1){
        boots.removeEventListener('click', initiateBoots);
        document.removeEventListener('keydown', moveBoots);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else if (cClick ==1){
        cPants.removeEventListener('click', initiatePants);
        document.removeEventListener('keydown', moveCPants);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else if (cSClick ==1){
        cSkirt.removeEventListener('click', initiateCSkirt);
        document.removeEventListener('keydown', moveCSkirt);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else if (topClick ==1){
        top.removeEventListener('click', initiateTop);
        document.removeEventListener('keydown', moveTop);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else if (jClick ==1){
        jersey.removeEventListener('click', initiateJersey);
        document.removeEventListener('keydown', moveJersey);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else if (mSClick ==1){
        mShirt.removeEventListener('click', initiateMShirt);
        document.removeEventListener('keydown', moveMShirt);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else if (rClick ==1){
        rShorts.removeEventListener('click', initiateRShorts);
        document.removeEventListener('keydown', moveRShorts);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else if (tuClick ==1){
        tutu.removeEventListener('click', initiateTutu);
        document.removeEventListener('keydown', moveTutu);
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
    else {
        sClick = 0;
        tClick = 0;
        skClick = 0;
        shClick = 0;
        bClick = 0;
        cClick = 0;
        cSClick = 0;
        topClick = 0;
        jClick = 0;
        mSClick = 0;
        rClick = 0;
        tuClick = 0;
    }
}