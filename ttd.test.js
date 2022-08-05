const sayHello = require('./ttd');
const add = require("./ttd")

describe('say hello', () => {
    xit('says hello world', () => {
        const result = sayHello("world");

        expect(result).toEqual("Hello world");
    })

    xit('say hello everyone', () => {
        const result = sayHello("everyone");
        expect(result).toEqual("Hello everyone")
    })
})

describe("add", () => {
    it('adds two numbers together', () => {
        const result = add(2, 2);
        expect(result).toBe(4)
    })
})