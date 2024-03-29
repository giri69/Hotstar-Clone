let movies = [
    {
        name: 'falcon and the winter soldier',
        des: 'Sam Wilson and Bucky Barnes realize their futures will be anything but normal. John Walker is named Captain America, and Sam and Bucky team up against a rebel group. Sam and Bucky go to a criminal safe haven to find information about the Super Soldier serum.',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'the mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'wanda vision',
        des: "Wanda (Barbara Loden) is a wanderer in a dreary Rust Belt town, drifting from bars to motels, jobs to jobs and men to men. She's directionless and futureless, an aging beauty seen by men as usable and disposable. She hands over custody of her children because she knows they're better with their father.",
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Kelly Marie Tran as Raya, a fierce and virtuous warrior princess of Heart who has been training to become a Guardian of the Dragon Gem. To save her father from petrification and restore peace to Kumandra, she embarks on a search for the last dragon. Awkwafina as Sisu, the last dragon in existence.',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface.",
        image: 'images/slider 5.PNG'
    }
];

const carousel = document.querySelector('.carousel')
let sliders = []

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length) {
        slideIndex = 0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if(sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i < 1; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 2500);

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})


