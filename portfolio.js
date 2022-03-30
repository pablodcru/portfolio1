const button1 = document.querySelector('.but1');
const button2 = document.querySelector('.but2');
const button3 = document.querySelector('.but3');
const biotext = document.querySelector('.biotext');


// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.navbar').style.top = "0";
  } 
}


function process() {
    document.getElementById("myform").reset(); 
}


//ACTIVATING FORM
function sendMail(params) {
    var tempParams = {
        first_name: document.getElementById("firstName").value,
        last_name: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send('contact_service1','contact_form',tempParams).then(function(res){
        console.log("success", res.status);
    })
}




button1.addEventListener('click', () => {
    button2.classList.remove('selected');
    button3.classList.remove('selected');
    button1.classList.add('selected');
    biotext.innerHTML = 'I am a driven Front End Developer and completely devoted to keep expanding my knowledge through hard work; consequently, hiring me will likely be a win-win situation.';

});
button2.addEventListener('click', () => {
    button1.classList.remove('selected');
    button3.classList.remove('selected');
    button2.classList.add('selected');
    biotext.innerHTML = 'Hi, I am a persistent Front End Developer who enjoys developing robust websites and patiently debugging. I  blablablabla  blablablabla blablablabla blablablabla blablablablablablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla..';

});
button3.addEventListener('click', () => {
    button1.classList.remove('selected');
    button2.classList.remove('selected');
    button3.classList.add('selected');
    biotext.innerHTML = 'Hi, my name is Pablo and I am a passionate Front End Developer. I consider myself responsive, as the websites that I develop, and a team-minded constructive person who will bring a proactive attitude to the team. Problems are there to be solved, independently or collaboratively, but always committed to find the best approach. I am determined to keep learning as much as I can, therefore, I can be a great asset to your company and I would be completely grateful to demonstrate my knowledge in a technical interview of the numerous skills listed below.';

});


//Solve problems independently and collaboratively
/* Hi , my name is Pablo and I am a passionate Front End Developer. I consider myself responsive, as the websites that I develop, and a team-minded constructive person who will bring a proactive attitude. Problems are there to be solved, independently or collaboratively, but always committed to find the best approach. I am determined to keep learning as much as I can, therefore, I can be a great asset for your company and I would be completely glad to demonstrate my knowledge in a technical interview of the numerous skills listed below.


Short: I am a driven Front End Developer and completely devoted to keep expanding my knowledge through hard work; consequently, hiring me could be a win-win situation.

Medium: Hi, I am a persistent Front End Developer who enjoys developing robust websites and patiently debugging. I  blablablabla  blablablabla blablablabla blablablabla blablablablablablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla.

















/* https://alvarotrigo.com/blog/css-text-animations/



const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "I",
    "Hope",
    "You",
    "Have",
    "A",
    "Good",
    "Day",
    ":)",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();  */