const db = require("../models");
const { fakerFR : faker} = require('@faker-js/faker');
var bcrypt = require("bcryptjs");

const Role = db.role;
const Jeux = db.jeu;
const User = db.user;
const Coach = db.coach;
const Tutorial = db.tutorials;



const jeuxList = [
  "Overwatch",
  "Fortnite",
  "Apex Legends",
  "Rocket League",
  "League of Legends",
  "Valorant",
  "CS:GO",
  "Rainbow Six Siege",
  "Call of Duty",
  "Hearthstone",
  "Dota 2",
  "Starcraft 2",
  "World of Warcraft",
  "FIFA",
  "NBA 2K",
  "Madden NFL",
  "NHL",
  "Super Smash Bros",
  "Street Fighter",
  "Tekken",
  "Mortal Kombat",
  "PUBG",
  "Paladins",
  "Heroes of the Storm",
  "Clash Royale",
  "Clash of Clans",
  "Brawl Stars",
  "Teamfight Tactics",
];

const req = {
  body: {},
};
//add with sequelize the list of games in the database
const loadFixtures = () => {
  for (let i = 0; i < jeuxList.length; i++) {
    Jeux.create({
      jeu: jeuxList[i],
      description: faker.lorem.lines(1),
    });
  }

  for (let i = 0; i < 50; i++) {
    User.create({
      mdp: bcrypt.hashSync("mdp", 8),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      pseudo: faker.internet.userName(),
      mail: faker.internet.email(),
    });
  }

  for(let i = 0; i < 10; i++){
    Coach.create({
      description: faker.lorem.lines(1),
      userId: i+1,
      jeuxId: faker.number.int({ min: 1, max: 25 }),
      niveau: faker.lorem.lines(1),
      achievements: faker.lorem.lines(1),
    })
  }

  for(let i = 0; i < 25; i++){
    Tutorial.create({
      title: faker.lorem.lines(1),
      description: faker.lorem.lines({ min: 3, max: 9 }),
      published: true,
      userId: faker.number.int({ min: 1, max: 5 }),
      jeuxId: faker.number.int({ min: 1, max: 25 }),
    })
  }
}

module.exports = loadFixtures;
