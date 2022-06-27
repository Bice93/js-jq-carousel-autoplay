// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro:
//avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito
//e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. 
//Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
//ma costruito dinamicamente attraverso JavaScript.
//TIMING FUNCTIONS
//Aggiungete una funzionalità basica di scorrimento delle immagini: per cui ogni 3 secondi il carosello mostrerà l'immagine
// successiva senza bisogno di alcuna interazione da parte dell'utente.

// Inserisco le immagini in un array
const boxImage = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

console.log(boxImage)

//recupero il parent all'interno della quale vado ad inserire le mie immagini
const containerImg = document.querySelector(`.container_img`); //parent

let activeImageIndex = 0;
// inserisco le mie immagini
for (let index = 0; index < boxImage.length; index++) {
    console.log(boxImage[index]);
    // creo un elemento di tipo immagine
    const newImage = document.createElement(`img`);

    // gli attribuisco le proprietà che ritengo necessarie
    newImage.setAttribute(`src`, boxImage[index]);

    // gli attribuisco la classe
    newImage.classList.add(`ms_img`);

    // lo aggiungo al parent
    containerImg.append(newImage);

    if (index == activeImageIndex) {
        newImage.classList.add(`active`)
    }
};

//prendo tutti gli elementi di tipo img figli di container_img
const imageElements = document.querySelectorAll(`.container_img img`);

// faccio scorrere per 12 volte le immagini ogni 3 secondi.
                                                            // const clock = setInterval(myFunction, 3000);
                                                            // function myFunction(){
                                                            //
                                                            // }
                                                            // clearInterval(clock);
const clock = setInterval(myFunction, 3000);
let counter = 0;
function myFunction() {
    //prendo l'immagine attiva
    const activeImage = document.querySelector(`img.active`);
    activeImage.classList.remove(`active`);

    activeImageIndex++;  //activeImageIndex = activeImageIndex + 1

    //se arrivo alla fine della lista ricomincio da 0
    if (activeImageIndex == boxImage.length) {
        activeImageIndex = 0;
    };

    //prendo l'immagine all'indice attuale e le aggiungo la classe active
    imageElements[activeImageIndex].classList.add(`active`);
    console.log(activeImageIndex);
    counter++;
    if (counter >= 12) {
        clearInterval(clock);
    }
};

// //recupero i bottoni dal DOM
// const prevButton = document.getElementById(`prev-button`);
// const nextButton = document.getElementById(`next-button`);


// //devo aggiungere un comportamento conseguente ad un'interazione con i bottoni

// nextButton.addEventListener(`click`, function () {

    // const clock = setInterval(myFunction, 3000);
    // let counter = 0;
    // function myFunction() {
    //     //prendo l'immagine attiva
    //     const activeImage = document.querySelector(`img.active`);
    //     activeImage.classList.remove(`active`);

    //     activeImageIndex++;  //activeImageIndex = activeImageIndex + 1

    //     //se arrivo alla fine della lista ricomincio da 0
    //     if (activeImageIndex == boxImage.length) {
    //         activeImageIndex = 0;
    //     };

    //     //prendo l'immagine all'indice attuale e le aggiungo la classe active
    //     imageElements[activeImageIndex].classList.add(`active`);
    //     console.log(activeImageIndex);
    //     counter++;
    //     if (counter >= 12) {
    //         clearInterval(clock);
    //     }

    // };
//     // OPPURE //prendo tutti gli elementi di tipo img figli di container_img
//     // const imageElements = document.querySelectorAll(`.container_img img`);

//     // const imageHidden = imageElements[activeImageIndex];
//     // imageHidden.classList.remove(`active`);

//     // //prendo l'immagine attiva
//     // const activeImage = document.querySelector(`img.active`);
//     // activeImage.classList.remove(`active`);

//     // activeImageIndex++;  //activeImageIndex = activeImageIndex + 1

//     // //se arrivo alla fine della lista ricomincio da 0
//     // if (activeImageIndex == boxImage.length) {
//     //     activeImageIndex = 0;
//     // };

//     // //prendo l'immagine all'indice attuale e le aggiungo la classe active
//     // imageElements[activeImageIndex].classList.add(`active`);
//     // console.log(activeImageIndex);
// });

// prevButton.addEventListener(`click`, function () {
//     imageElements[activeImageIndex].classList.remove(`active`);
//     activeImageIndex--;
//     if (activeImageIndex === -1) {
//         activeImageIndex = boxImage.length - 1;
//     }

//     imageElements[activeImageIndex].classList.add(`active`);
//     //console.log(activeImageIndex);
// });


