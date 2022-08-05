const Pet = require('../src/pet');


describe('constructor', () => {

    it ('returns an object', () => {
        expect(new Pet('Chase')).toBeInstanceOf(Object);
    });

    it('gives the pet a name', () => {

        const pet = new Pet('Chase');
        expect(pet.name).toEqual('Chase');
    });

    it('Pet has a new age of 0', () => {

        const pet = new Pet('Chase');
        expect(pet.age).toEqual(0);
    });

    it('increments the age by 1', () => {
        const pet = new Pet('Chase');
    
        pet.growUp();
    
        expect(pet.age).toEqual(1);
    });

    it('pets hunger set to 0', () => {
        const pet = new Pet('Chase');
        expect(pet.hunger).toEqual(0);
    });

    it('When the pet grows it increases the hunger level by 5', () => {
        const pet = new Pet('Chase');
        pet.growUp();
        expect(pet.hunger).toEqual(+5);
    });

    it('Pet should have a fitness level of 10', () => {
        const pet = new Pet('Chase');
        expect(pet.fitness).toEqual(10);
    });

    it('Pets fitness should decrease by 3', () => {
        const pet = new Pet('Chase');
        pet.growUp();
        expect(pet.fitness).toEqual(-3)
    });

    it('walking the pet should increase the fitness by 4 but no higher than 10', () => {
        const pet = new Pet('Chase');
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

    it('Feeding the pet will decrease its hunger level by 3', () => {
        const pet = new Pet ('Chase');
        pet.feed();
        expect(pet.hunger).toEqual(0)
    });

    it('checking what the pet needs (fitness and hunger)', () => {
        const pet = new Pet('Chase');
        pet.fitness = 2;
        pet.hunger = 5;
        expect(pet.checkUp()).toEqual('I am hungry and need a walk')
    });
    it('checking what the pet needs (fitness)', () => {
        const pet = new Pet('Chase');
        pet.fitness = 2;
        expect(pet.checkUp()).toEqual('I need a walk')
    });
    it('checking what the pet needs (hunger)', () => {
        const pet = new Pet('Chase');
        pet.hunger = 5;
        expect(pet.checkUp()).toEqual('I am hungry')
    });

    it('if age is over 30 return false', () => {
        const pet = new Pet('Chase');
        pet.age = 31;
        expect(pet.isAlive).toEqual(false)
    });
    it('if fitness is below 10 return false', () => {
        const pet = new Pet('Chase');
        pet.fitness = -1;
        expect(pet.isAlive).toBe(false)
    });
});
    describe('feed', () => {
      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Chase');
        pet.age = 31;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive!');  
      });      
    });
    describe('walk', () => {
      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Chase');
        pet.fitness = 0;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive!');  
      });      
    });
    describe('hunger', () => {
      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Chase');
        pet.hunger = 11;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive!');  
      });      
    });

   

    