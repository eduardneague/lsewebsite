// for my future self, adding more pics means incresing the if(RoboCounter > 11) number. That 11 is the number of pics, you'll get it, whatever.
// bye edu, see ya later

// roboSlider (11 pictures)

let RoboCounter = 2;
const roboSlider = document.getElementById("roboSliderImg");

setInterval(() => {
    roboSlider.style.background = `url(../pics/pics_evenimente/pics_roboChallange/slider_roboChallange_${RoboCounter}.jpg)`
    roboSlider.style.backgroundSize = "cover";
    roboSlider.style.backgroundRepeat = "no-repeat";
    roboSlider.style.backgroundPosition = "100% 25%";
    RoboCounter++;

    if(RoboCounter > 11) {
        RoboCounter = 1;
    }
}, 3000);


// mobilProSlider (6 pictures)

let mobilProCounter = 2;
const mobilProSlider = document.getElementById("mobilProSliderImg");

setInterval(() => {
    mobilProSlider.style.background = `url(../pics/pics_evenimente/pics_mobilPro/slider_mobilPro_${mobilProCounter}.jpg)`
    mobilProSlider.style.backgroundSize = "cover";
    mobilProSlider.style.backgroundRepeat = "no-repeat";
    mobilProSlider.style.backgroundPosition = "100% 25%";

    mobilProCounter++;

    if(mobilProCounter > 6) {
        mobilProCounter = 1;
    }
}, 3000);

// apvSlider (3 pictures)

let apvSliderCounter = 2;
const apvSlider = document.getElementById("apvSliderImg");

setInterval(() => {
    apvSlider.style.background = `url(../pics/pics_evenimente/pics_aleargaPentruViata/slider_aleargaPentruViata_${apvSliderCounter}.jpg)`
    apvSlider.style.backgroundSize = "cover";
    apvSlider.style.backgroundRepeat = "no-repeat";
    apvSlider.style.backgroundPosition = "50% 25%";

    apvSliderCounter++;

    if(apvSliderCounter > 3) {
        apvSliderCounter = 1;
    }
}, 3000);

// lanParty (3 pictures)

let lanPartyCounter = 2;
const lanSlider = document.getElementById("lanSliderImg");

setInterval(() => {
    lanSlider.style.background = `url(../pics/pics_evenimente/pics_lanParty/slider_lanParty_${lanPartyCounter}.jpg)`
    lanSlider.style.backgroundSize = "cover";
    lanSlider.style.backgroundRepeat = "no-repeat";
    lanSlider.style.backgroundPosition = "50% 25%";

    lanPartyCounter++;

    if(lanPartyCounter > 3) {
        lanPartyCounter = 1;
    }
}, 3000);