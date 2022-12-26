// const getDinos = () => [
//   {
//     species: "Albertosaurus",
//     weight: 10505,
//     height: 26,
//     diet: "carnivor",
//     where: "North America",
//     when: "Late Cretaceous",
//     fact: "Albertosaurus was named by Henry Fairfield Osborn in a one-page note at the end of his 1905 description of Tyrannosaurus rex.",
//     image: "Albertosaurus.jpg",
//   },
//   {
//     species: "Triceratops",
//     weight: 13000,
//     height: 114,
//     diet: "herbavor",
//     where: "North America",
//     when: "Late Cretaceous",
//     fact: "First discovered in 1889 by Othniel Charles Marsh",
//     image: "triceratops.png",
//   },
//   {
//     species: "Tyrannosaurus Rex",
//     weight: 11905,
//     height: 144,
//     diet: "carnivor",
//     where: "North America",
//     when: "Late Cretaceous",
//     fact: "The largest known skull measures in at 5 feet long.",
//     image: "tyrannosaurus rex.png",
//   },
//   {
//     species: "Anklyosaurus",
//     weight: 10500,
//     height: 55,
//     diet: "herbavor",
//     where: "North America",
//     when: "Late Cretaceous",
//     fact: "Anklyosaurus survived for approximately 135 million years.",
//     image: "anklyosaurus.png",
//   },
//   {
//     species: "Brachiosaurus",
//     weight: 70000,
//     height: "372",
//     diet: "herbavor",
//     where: "North America",
//     when: "Late Jurasic",
//     fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
//     image: "brachiosaurus.png",
//   },
//   {
//     species: "Stegosaurus",
//     weight: 11600,
//     height: 79,
//     diet: "herbavor",
//     where: "North America, Europe, Asia",
//     when: "Late Jurasic to Early Cretaceous",
//     fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
//     image: "stegosaurus.png",
//   },
//   {
//     species: "Elasmosaurus",
//     weight: 16000,
//     height: 59,
//     diet: "carnivor",
//     where: "North America",
//     when: "Late Cretaceous",
//     fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
//     image: "elasmosaurus.png",
//   },
//   {
//     species: "Pigeon",
//     weight: 0.5,
//     height: 9,
//     diet: "herbavor",
//     where: "World Wide",
//     when: "Holocene",
//     fact: "All birds are living dinosaurs.",
//     image: "pigeon.png",
//   },
// ];

//create a dinoClass
// create an instance of the dinoClass class
//call the play method of the dino instance
//call the getHumanData method of the instance

class Human {
  constructor(name, height, weight, diet) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
  }
}

class DinoClass {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this._actions();
  }
  play() {
    this.getHumanData();
  }
  getHumanData() {
    this.human = new Human(
      document.getElementById("name").value,
      this.getCalculateHeight(),
      "",
      document.getElementById("diet").value
    );
  }
  getCalculateHeight() {}
  _actions() {
    // document.getElementById("btn").addEventListener("click", this.play());
  }
}

const dino = new DinoClass("dino-compare");

// Create Dino Constructor
// class Dino {
//   constructor({ species, weight, height, diet, where, when, fact, image }) {
//     this.image = image;
//     this.species = species;
//     this.weight = weight;
//     this.height = height;
//     this.diet = diet;
//     this.where = where;
//     this.when = when;
//     this.fact = fact;
//   }

//   getHecho(human) {
//     const hecho = this.species === "Pigeon" ? 0 : Math.round(Math.random() * 5);
//     if (hecho == 1) return this.getWeight(human.weight);
//     if (hecho == 2) return this.getHeight(human.height);
//     if (hecho == 3) return this.getDiet(human.diet);
//     if (hecho == 4) return `The dino was from ${this.where}`;
//     if (hecho == 5) return `The dino was in ${this.when}`;
//     return this.fact;
//   }

//   getWeight(weightHuman) {
//     if (weightHuman == this.weight)
//       return `The weight of the dino is equal to human`;
//     return weightHuman > this.weight
//       ? `The weight of the dino is smaller than the human`
//       : `The weight of the dino is greater than the human`;
//   }

//   getHeight(heightHuman) {
//     if (heightHuman == this.height)
//       return `The height of the dino is equal to human`;
//     return heightHuman > this.height
//       ? `The height of the dino is smaller than the human`
//       : `The height of the dino is greater than the human`;
//   }

//   getDiet(dietHuman) {
//     return dietHuman == this.diet
//       ? `The diet of the dino is equal to human`
//       : `The diet of the dino is different to human`;
//   }
// }

// const human = {
//   name: "melisa",
//   height: 98,
//   weight: 78,
//   diet: "carnivor",
// };

// const getHtmlHuman = (name) => `
//         <div class="grid-item">
//             <h3>${name}</h3>
//             <img src="images/human.png">
//             <p></p>
//         </div>
//         `;

// const getHtmlDino = (dino, human) => `
//         <div class="grid-item">
//             <h3>${dino.species}</h3>
//             <img src="images/${dino.image}">
//             <p>${dino.getHecho(human)}</p>
//         </div>
//         `;

// const dinos = getDinos().map((dino) => getHtmlDino(new Dino(dino), human));
// dinos.splice(4, 0, getHtmlHuman(human.name));

// // document.getElementById('grid').appendChild(fragment);
// document.querySelector("#grid").innerHTML = dinos;

// function obtenerDatos() {
//   let name = document.getElementById("name").value;
// }

// Create Human Object

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
