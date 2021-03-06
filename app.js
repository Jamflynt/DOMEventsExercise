console.log(`HEY WORLD I'M WALKING 'ERE!`);

// 1a 
const button1 = document.getElementById(`one`);
// 1b 
button1.onclick = () =>{
    alert("Cool! You can hear/understand a hummingbird and ants");
};

// 2a
const h3 = document.getElementsByTagName(`h3`); // Discovery: HTML collections need an index or [] to be able to add an event listener
// 2b
h3[0].addEventListener(`mouseover`, () => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});

// 3a 
const form = document.querySelector(`form`)
console.dir(form);
// 3b
form.addEventListener(`submit`, s => {
    s.preventDefault;
    const input = form.elements.quote.value;
    alert(`${input}`);
});

// Bonus
// 4a 
const darkMode = document.querySelector(`#dm`);
// 4b wonky but it works
darkMode.addEventListener(`click`, () => {
    const body = document.querySelector(`*`);
    for (i=0; i<body.clientHeight; i++){ // After researching clientHeight a little more I understand why this works and that eventually, after enough clicks, it would cease to work. This is most definitely not the best way to complete this but its kinda a funny discovery. 
        body.classList.toggle(`dark-mode`);
    };
});
// OR 
// darkMode.addEventListener(`click`, () => {
//     const body = document.querySelector(`*`);
//     for (x of body){
//         x.classList.toggle(`dark-mode`);
//     };
// });

// 5a
const reality = document.querySelector(`#reality`);
// 5b 
let count = 0;
reality.addEventListener(`click`, () => {
    count ++;
    if (count <= 2){
        alert("You have successfully moved to another reality")
    } else if (count === 3){
        alert("OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!");
    };
});