let timesRolled = 0;
let tschikasCaught = 0;
let tschikasSpawned = 0;
function stuffThatNeedsToHappenWhenTheBodyLoads(){
    rngTschikaSpawn();
    window.location.replace(window.location.href);
    document.body.addEventListener('touchend', function(){
        window.close();
    });
}
function rngTschikaSpawn() {
    rngDecider = Math.random()*25000;
    if (tschikasSpawned < 6){
        setInterval(newTschika, rngDecider);
    }
    else {
        rngDecider = 0;
    }
}
function newTschika(left, top) {
    tschikasSpawned++;
    const createdTschika = document.createElement('img');
    createdTschika.setAttribute('class', 'tschika');
    createdTschika.setAttribute('draggable', 'false');
    document.querySelector('#container').appendChild(createdTschika);
    createdTschika.addEventListener('mouseenter', function(){
        timesRolled++;
        let randomYCoordinate = Math.random()*5;
        let randomXCoordinate = Math.random()*timesRolled;
        this.style.transform = `scale(1.3) translate(${randomXCoordinate*3}em, ${randomYCoordinate*8}em) rotate(-${timesRolled*810000}deg)`;});
        createdTschika.addEventListener('click', function(){
            tschikasCaught++;
            tschikasSpawned--;
            document.querySelector('strong').innerHTML = tschikasCaught;
            this.remove();
        timesRolled = 0;
    this.style.left = randomXCoordinate^2 + 'em';
    this.style.top = randomYCoordinate^2 + 'em';
    });
    const TschikaImages = ["docs/assets/tschika who sings the wheels on the bus.png",
    "docs/assets/tschika who throws the chips.png",
    "docs/assets/tschika who fetches the chips.png"];
    const randomTschikaImgDecider = (Math.floor(Math.random()*TschikaImages.length));
    let selectedTschikaImg = TschikaImages[randomTschikaImgDecider];
    createdTschika.src = selectedTschikaImg;
}
function activateShopMenu(){
    document.getElementsByClassName('shopMenuContainer').style.display = "block";
    document.getElementsByClassName('shopMenuContent').style.display = "block";
}
