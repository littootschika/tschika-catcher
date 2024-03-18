let timesRolled = 0;
let tschikasCaught = 0;
let tschikasSpawned = 0;
let lalalala = 0;
//let bitchesWhoeverIsReadingThisHas = 0;
function stuffThatNeedsToHappenWhenTheBodyLoads(){
    rngTschikaSpawn();
}
document.addEventListener('touchend', cantTouchMe_DUN_DUN_DA_DA__DA_DA_DA_DA);
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
//hammer and the frog reference to stop people from cheating
function cantTouchMe_DUN_DUN_DA_DA__DA_DA_DA_DA() {
    lalalala++;
    tschikasCaught--;
    if (lalalala == 1){
        alert('I wouldn\'t advise you to cheat so please... \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n DON\'T, RETARD!');
    }
    if (lalalala == 2){
        alert('ahh, then you really want to SPILL THE MILK, do u?');
    }
    if (lalalala == 3){
        alert('CRY OVER THE SPILT MILK. \nThen eat your eyeballs, because they aren\'t gonna digest themselves, are they');
    }
    if (lalalala == 4){
        alert('I\'m not being serious, but stop');
    }
    if (lalalala == 5){
        alert("HEHEHE U THOUGHT U COULD CHEAT, U FUCKING BITCH⸘ NO! THAT'S IMPOSSIBLE!\n except for 1 way which i only know and am looking for people to eventually find.\nThen, being the sadistic being I am, I will remove it >;D \n and also, if you look in the code, i've made a hammer and the frog reference");
    }
    if (lalalala == 6){
        alert('alright, I see that you\'re too stupid to reason with. The code actually stops workling if you click the container more than 100 times, because I can\'t be bothered adding more 0\'s.\nSo click the container 100 times, and any clicks after that will give u more tschikas.\n Why would I say something like this to you? Well, this has captured ur attention then, and I assume most people don\'t even try this out and lie to me, saying it\'s good. I\'m shit at doing this compared to people who work at google.\nMore clicks == more time u spent on website. So keep clicking. Click 1000, and get 900 tschikas.');
        alert('after an absurd amount of touches on the container, touch the tschika');
        alert('oh, wait a minute, you have to listen to everything i say because of a bug in the code. But listening to me be rude to you is fun, IS IT NOT⸘');
    }
    if (lalalala == 7){
        let afdwhiopu = parseInt(prompt('What is the number of tschikas you have now?'));
        if (document.querySelector('b') == afdwhiopu) {
            alert('sorry. That must\'ve been a glitch. Here, I\'LL FIX IT, so it\'s VERY VERY CORRECT');
        }
        if (document.querySelector('b') != afdwhiopu){
            alert('liar');
        }
        document.querySelector('em').innerHTML = 'bitches you have: '
        alert('for further inquiries, fucking piss me off again');
    }
    if (lalalala == 8){
        alert('WDYM I got it wrong? It\'s ACCURATE');
    }
    if (lalalala == 9){
        alert(`You know what they say, \"if it aint broken, don\'t fix it.\" Well, I couldn\'t fix something that was broken (your mind with -1 braincells and -${tschikasCaught} bitches), so I fixed the website instead to make it accurate`);
    }
    if (lalalala == 10){
        alert('Stop it, I don\'t like it.\n =-OR-= \nTerminate thee bullshit, Thy dost not prefer the situation that thou art forcibly putting thyself in.\n are you REALLY sacrificing your time for this, just to piss me off? Well, if you want to waste it even more, I have a secret message at 10000 clicks. Try it, and if you get that, I\'ll be surprised.');
    }
    if (lalalala == 10000){
        alert('WHAT.THE.FUCK. \n YOU ACTUALLY FUCKING DID IT?! I WAS BEING SARCASTIC! BUT GOOD JOB- THIS IS A VERIFICATION THAT YOU HAVE NO BITCHES. THANKS FOR YOUR WASTED TIME AND EFFORT THOUGH! \n You get 1 gold star, verified especially from me, the leader if the chicken resistance.');
    }
    if (lalalala == 10001){
        alert('cool. now you get 2 gold stars');
    }
function activateShopMenu(){
    document.getElementsByClassName('shopMenuContainer').style.display = "block";
    document.getElementsByClassName('shopMenuContent').style.display = "block";
}
//ILLUSION TSCHIKA. When you hover over 1 chicken, they move, and when you click on them, they disapear and leave the actual illusion tschika there for 0.2seconds and then summon some more tschikas
//ALSO, REMEMBER LITTOO DRIPPA!
