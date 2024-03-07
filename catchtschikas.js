let timesRolled = 0;
let tschikasCaught = 0;
let tschikasSpawned = 0;

//spawning tschikas by rng
function rngTschikaSpawn() {
    rngDecider = Math.floor((Math.random()*15000)+1);
    setInterval(newTschika, rngDecider);
}
function newTschika() {
    //variables
    tschikasSpawned++
    //attributes
    const createdTschika = document.createElement('img');
    createdTschika.setAttribute('class', 'tschika');
    createdTschika.setAttribute('id', `tschika${tschikasSpawned}`);
    createdTschika.setAttribute('draggable', 'false');
    document.querySelector('#container').appendChild(createdTschika);
    //event listeners
    createdTschika.addEventListener('mouseenter', rollAway);
    createdTschika.addEventListener('click', catchedTarget);
    //src of the tschikas- i did it, just like i promised. I definitely don't preak promises, do I? (not true)
    const TschikaImages = [,
    "docs/assets/tschika who sings the wheels on the bus.png",
    "docs/assets/tschika who throws the chips.png",
    "docs/assets/tschika who fetches the chips.png",];
    const randomTschikaImgDecider = (Math.floor(Math.random()*TschikaImages.length)+3);
    let selectedTschikaImg = TschikaImages[randomTschikaImgDecider];
    createdTschika.src = selectedTschikaImg;
    //event listeners
}
//make it so that if the tschika is within a certain distance of the border, it goes right
function rollAway(){
    timesRolled++;
    let randomYCoordinate = Math.random()*10;
    let randomXCoordinate = Math.random()*timesRolled;
    let tschikaThing = document.getElementById(`tschika${tschikasSpawned}`);
    tschikaThing.style.transform = `scale(1.3) translate(${randomXCoordinate*8}em, ${randomYCoordinate*8}em) rotate(-${timesRolled*81000}deg)`;
}
function catchedTarget() {
    tschikasCaught++;
    document.querySelector('strong').innerHTML = tschikasCaught;
    document.getElementById(`tschika${tschikasSpawned}`).remove();
    tschikasSpawned--;
    timesRolled = 0;
    }
//hey rememeber that bug where the createdTschikas made the actual tschika roll? Yeah, make that into a boss, the
//ILLUSION TSCHIKA, where that happens. When you hover over 1 chicken, they all move, and when you click on them,
//they all disapear and leave the actual illusion tschika there for 0.2seconds and then summon some more tschikas
