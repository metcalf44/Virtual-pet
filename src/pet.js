
const maximumFitness = 10;
const maximumAge = 30;
const hungerLevel = 0


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = hungerLevel;
    this.fitness = maximumFitness;
    this.children = [];
}


Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

// Pet.prototype.isAlive = function() {
//     if (this.fitness <= 0 || this.hunger >= 10 || this.age >= maximumAge) {
//         return false;
//     }
//     return true;
// };


Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer Alive!');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness =- 3;
}

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer Alive!');
    }
    if (this.fitness >= 6) {
        this.fitness = maximumFitness
    } else {
        this.fitness += 4
    };
}

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive!');
    }
    if (this.hunger <= 3) {
        this.hunger = hungerLevel
    } else {
        this.hunger =- 3
    };
}

Pet.prototype.checkUp = function () {
    if (this.fitness <= 3 && this.hunger >=5) {
        return 'I am hungry and need a walk';
    }
    if (this.fitness <= 3) {
        return 'I need a walk'
    }
    if (this.hunger >= 5) {
        return 'I am hungry'
    } 
    return "I'm feeling 100%" 
    
};

Pet.prototype.adoptChild = []

module.exports = Pet;