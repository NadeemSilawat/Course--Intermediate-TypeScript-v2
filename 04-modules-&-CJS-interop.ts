
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


 