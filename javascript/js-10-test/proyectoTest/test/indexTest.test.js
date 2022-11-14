import { suma } from "../calculadora";

//const calculadora = require("../calculadora");
test ("test suma", () => {
    const r = suma.suma(1,5)
    expect (r).toBe(6);
})
test.todo("test de resta");
test.todo("test de mult");
test.todo("test de divide");