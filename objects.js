//objects basics

let myObj = {};
//console.log(myObj);

myObj.key = 'value';
//console.log(myObj);

//objects upfront

let obj = {
    name : "jame",
    role : "AWPer",
}
//console.log(obj["role"]);


//example for team management system
let player = {
    name : "gla1ve",
    role : "IGL",
    gun : "rifler"
}

function createPlayer(name, role, gun){
    let newObject = {};
    newObject.name = name;
    newObject.role = role;
    newObject.gun = gun;
    return newObject; 
}

let player2 = createPlayer("dev1ce", "AWPer",  "AWP");
//console.log(player2);

//constructor functions
function Player(name, role, gun) {
    this.name = name;
    this.role = role;
    this.gun = gun;   
}

let player3 = new Player("dupreeh", "entry/rifler", "rifler/awp");
//console.log(player3);

player4 = new Player("Xyp9yx", "support", "rifle");
//console.log(player4);


//Bicycle constructor 
function Bicycle(cadence, speed, gears, tirepressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gears = gears;
    this.tirepressure = tirepressure;
    this.inflate = function() {
        this.tirepressure +=3; 
    }
}
//const bike = new Bicycle(30,20,3,10);
//console.log(bike);
//bike.inflate();
//console.log(bike.tirepressure);

function Mechanic(name){
    this.name = name;
}
const mike = new Mechanic("Mike");