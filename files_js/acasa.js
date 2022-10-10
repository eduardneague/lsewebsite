// Bottom Slider

    // DOM elements

    const slider = document.querySelector('.image-slider');
    const arrLeft = document.querySelector('.arrow-left');
    const arrRight = document.querySelector('.arrow-right');

    // Slider data 

    // ADD IMAGES DOWN HERE!!!!

    const images = [
        "pic1_bottomSlider.jpg", 
        "pic2_bottomSlider.jpg", 
        "pic3_bottomSlider.jpg", 
        "pic4_bottomSlider.jpg", 
        "pic5_bottomSlider.jpg", 
        "pic6_bottomSlider.jpg", 
        "pic7_bottomSlider.jpg", 
        "pic8_bottomSlider.jpg", 
        "pic9_bottomSlider.jpg", 
        "pic10_bottomSlider.jpg", 
        "pic11_bottomSlider.jpg", 
        "pic12_bottomSlider.jpg", 
        "pic13_bottomSlider.jpg", 
        "pic14_bottomSlider.jpg", 
        "pic15_bottomSlider.jpg", 
        "pic16_bottomSlider.jpg", 
        "pic17_bottomSlider.jpg", 
        "pic18_bottomSlider.jpg", 
        "pic19_bottomSlider.jpg", 
        "pic20_bottomSlider.jpg", 
        "pic21_bottomSlider.jpg", 
        "pic22_bottomSlider.jpg", 
        "pic23_bottomSlider.jpg", 
        "pic24_bottomSlider.jpg", 
        "pic25_bottomSlider.jpg", 
        "pic26_bottomSlider.jpg", 
        "pic27_bottomSlider.jpg", 
        "pic28_bottomSlider.jpg", 
        "pic29_bottomSlider.jpg", 
        "pic30_bottomSlider.jpg", 
        "pic31_bottomSlider.jpg", 
        "pic32_bottomSlider.jpg", 
        "pic33_bottomSlider.jpg", 
        "pic34_bottomSlider.jpg", 
        "pic35_bottomSlider.jpg", 
    ]

    // ADD IMAGES UP HERE!!!

    // Slider ID

    let id = 0;

    // Slider Function
    const slide = (id) => {
        slider.style.backgroundImage = `url(../pics/pics_index/pics_bottomSlider/${images[id]})`;
        slider-classList.add('image-fade');

        setTimeout(() => {
            slider.classList.remove('image-fade');
        }, 550);
    }

    arrLeft.addEventListener('click', () => {
        id--;
        if(id < 0) {
            id = images.length - 1;
        }

        slide(id);
    });

    arrRight.addEventListener('click', () => {
        id++;
        if(id > images.length - 1) {
            id = 0;
        }

        slide(id);
    });

// Main Header Text Slider 

    const texts = document.querySelector(".animate-text").children;
    let i = 0;

    const textInTimer = 3000;
    const textOutTimer = 2800;

    const animateText = () => {
        for(let j = 0; j < texts.length; j++) {
            texts[j].classList.remove("text-in", "text-out");
        }
        texts[i].classList.add("text-in");

        setTimeout(function () {
            texts[i].classList.add("text-out");
        }, textOutTimer);


        setTimeout(function() {
            if(i === texts.length - 1) {
                i = 0;
            }
            else {
                i++; 
            } animateText();
        }, textInTimer);

    }

    window.onload = animateText;
