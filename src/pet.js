
const maximumFitness = 20;
const maximumAge = 30;
const hungerFine = 0


class Pet {
    constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = hungerFine;
    this.fitness = maximumFitness;
    this.children = [];
}


    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
;

// Pet.prototype.isAlive = function() {
//     if (this.fitness <= 0 || this.hunger >= 10 || this.age >= maximumAge) {
//         return false;
//     }
//     return true;
// };

adoptChild(child) {
    this.children.push(child)
}

growUp() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer Alive!');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

walk() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer Alive!');
    }
    if (this.fitness >= 6) {
        this.fitness = maximumFitness
    } else {
        this.fitness += 4
    };
}

feed() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive!');
    }
    if (this.hunger <= 3 <= 0) {
        this.hunger = hungerFine
    } else {
        this.hunger -= 3
    };
}

checkUp() {
    if(!this.isAlive) {
       return "Your pet is no longer alive!" 
    }
    if (this.fitness <= 3 && this.hunger >=5) {
        return 'I am hungry and need a walk';
    }
    if (this.fitness <= 3) {
        return 'I need a walk'
    }
    if (this.hunger >= 5) {
        return 'I am hungry'
    } 
    return "I'm feeling like super pet" 
    
};
}

module.exports = Pet;