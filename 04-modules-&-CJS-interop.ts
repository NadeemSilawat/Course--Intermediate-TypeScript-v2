
/* ---------ES Module imports and exports------- */

// named imports
/*
    import { Blueberry, Raspberry } from './berries'
    import Kiwi from './kiwi' // default import
    export function makeFruitSalad() {} // named export
    export default class FruitBasket {} // default export
    export { lemon, lime } from './citrus' // re-export
    export * as berries from './berries' // re-export entire module as a single namespace
 */

/* 
    import * as allBerries from "./berries" // namespace import
    allBerries.Strawberry // using the namespace
    allBerries.Blueberry
    allBerries.Raspberry
    export * from "./berries" // namespace re-export
 */

/* ----------Importing types-------- */
/* 
// @filename: berries/raspberry.ts
export class Raspberry {
    constructor(public color: 'red' | 'black') {}
}
export function pickRaspberries(time: number): Raspberry[] {
  console.log('picking raspberries')
  return []
}
////////////////////////////////////////////////////////
// @filename: index.ts
import { Raspberry } from './berries/raspberry'
 
let x: Raspberry = { color: 'red' }; */



/* ----------CommonJS Interop-------- */

////////////////////////////////////////////////////////
// @filename: banana.js
/*
    class Banana {
    peel() {}
    }
    module.exports = { Banana }
    ////////////////////////////////////////////////////////
    // @filename: index.js
    const Banana = require('./banana') // CJS style import
    const banana = new Banana()
    banana.peel()
 */

/* 
In this scenario, if we converted the index.js file to TypeScript, we could
 continue to use the banana.js module as-is by using a namespace import */
 

// Common Js Example :- 

    // const fs = require("fs")
    // fs.readFileSync('example.txt')

// module ES6 Example:-
// namespace import
    // import * as fs from "fs"
    // fs.readFileSync('example.txt')








    /* Native ES module support */


/*     This means you can natively run code containing thing like import { Foo } from 'bar', use top-level await and more!

    How to unambiguously indicate which type of module you’re authoring
    
    Files with the .mjs extension are treated as native ES modules
    Files with the .cjs extension are treated as CJS modules
    You can also indicate whether .js files in your project should be treated as ES or CJS modules. In your package.json you may include a top-level "type" field with either of the following values
    
    "module" indicates that .js files should be run as ES modules
    "commonjs" indicates that .js files should be run as CommonJS
    Note that even as of Node 20.8.0, Node.js still assumes .js files are CommonJS if you specify no "type" field at all in your "package.json"
 */    
    


