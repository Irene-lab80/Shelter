const PETS_INFO = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.jpg",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
    id: "0",
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.jpg",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
    id: "1",
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.jpg",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
    id: "2",
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlett.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
    id: "3",
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine-2.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
    id: "4",
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
    id: "5",
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
    id: "6",
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
    id: "7",
  },
];

const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navList = document.querySelector(".nav-list");
const headerLogo = document.querySelector(".header__logo");

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const OVERLAY = document.querySelector(".overlay");

let POPUP = document.querySelector(".popup");
let POPUP_LINK = document.querySelectorAll(".popup-link");
const CLOSE_MODAL_BTN = document.querySelector(".popup__close");

// POPUP CLICK initial three
POPUP_LINK.forEach((el) => {
  el.addEventListener("click", (event) => {
    let petID = event.currentTarget.id;
    createPopup(petID);
    POPUP.classList.add("popup-open");
    document.body.classList.add("stop-scrolling");
  });
});

// CREATE POPUP FUNCTION
const createPopup = (id) => {
  let popupImg = document.querySelector(".popup__img");
  popupImg.setAttribute("src", PETS_INFO[id].img);
  let petName = document.querySelector(".popup__title");
  petName.textContent = PETS_INFO[id].name;
  let type_breed = document.querySelector(".popup__type-breed");
  type_breed.textContent = PETS_INFO[id].type + " - " + PETS_INFO[id].breed;
  let petDescription = document.querySelector(".popup__description");
  petDescription.textContent = PETS_INFO[id].description;
  let popup_age = document.querySelector(".popup__age");
  popup_age.textContent = PETS_INFO[id].age;
  let popup_inoculations = document.querySelector(".popup__inoculations");
  popup_inoculations.textContent = PETS_INFO[id].inoculations;
  let popup_diseases = document.querySelector(".popup__diseases");
  popup_diseases.textContent = PETS_INFO[id].diseases;
  let popup_parasites = document.querySelector(".popup__parasites");
  popup_parasites.textContent = PETS_INFO[id].parasites;
};

//CLOSE MODAL function
const closeModal = () => {
  POPUP.classList.remove("popup-open");
  document.body.classList.remove("stop-scrolling");
};

POPUP.addEventListener("mouseover", (event) => {
  if (
    !event.target.closest(".popup__content") ||
    event.target.closest(".popup__close")
  ) {
    CLOSE_MODAL_BTN.classList.add("popup__close-hover");
  } else if (event.target.closest(".popup__content")) {
    CLOSE_MODAL_BTN.classList.remove("popup__close-hover");
  }
});

// CLOSE MODAL
POPUP.addEventListener("click", (event) => {
  if (
    !event.target.closest(".popup__content") ||
    event.target.closest(".popup__close")
  ) {
    closeModal();
  }
});

// ================================================================================================

// burger menu
hamburger.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("open");
  navList.classList.toggle("open");
  document.body.classList.toggle("stop-scrolling");
  document.querySelector(".overlay").classList.toggle("overlay_active");

  document.querySelectorAll(".nav__link").forEach((el) => {
    el.classList.add("nav__link_dark");
    el.classList.remove("nav__link_light");
  });
});

let closeBurgerMenu = () => {
  hamburgerIcon.classList.remove("open");
  navList.classList.remove("open");
  OVERLAY.classList.remove("overlay_active");
  document.body.classList.remove("stop-scrolling");
};

document
  .querySelectorAll(".nav__link")
  .forEach((el) => el.addEventListener("click", closeBurgerMenu));

OVERLAY.addEventListener("click", closeBurgerMenu);

//======================================================================
// slider

// /CREATE CARD
const createCard = (petNumber) => {
  const card = document.createElement("div");
  card.id = PETS_INFO[petNumber].id;
  card.classList.add("card");
  // card.classList.add("popup-link");

  const cardImg = document.createElement("img");
  cardImg.classList.add("card__img");
  cardImg.setAttribute("src", PETS_INFO[petNumber].img);
  cardImg.setAttribute("alt", PETS_INFO[petNumber].name);
  card.append(cardImg);

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card__title");
  cardTitle.innerText = PETS_INFO[petNumber].name;
  card.append(cardTitle);

  const cardButton = document.createElement("button");
  cardButton.classList.add("button", "button_bordered", "card__button");
  cardButton.innerText = "Learn more";

  card.append(cardButton);

  // card.addEventListener("click", () => {});

  return card;
};

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }

  changedItem.innerHTML = "";

  let randomArrOfThree = myRandomInts(3, 8);

  for (let i = 0; i < randomArrOfThree.length; i++) {
    const newCard = createCard(randomArrOfThree[i]);
    changedItem.appendChild(newCard);
  }

  // create popup
  document.querySelectorAll(".card").forEach((el) => {
    el.addEventListener("click", (event) => {
      let petID = event.currentTarget.id;
      createPopup(petID);
      POPUP.classList.add("popup-open");
      document.body.classList.add("stop-scrolling");
    });
  });

  // buttons
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});

// arr of random integers function
const myRandomInts = (quantity, max) => {
  const arr = [];
  while (arr.length < quantity) {
    let candidateInt = Math.floor(Math.random() * max);
    if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
  }
  return arr;
};
