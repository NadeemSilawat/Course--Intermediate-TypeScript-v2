
/*-------Ternary operator with values---------*/

Example : 
const x = 16
const isXNegative = x >= 0 ? "no" : "yes"

console.log(isXNegative);   //"no"


// Syntax :
// condition ? value_if_true : value_if_false



/*--------------Conditional types--------*/

class Grill {
    startGas() {}
    stopGas() {}
  }
  class Oven {
    setTemperature(degrees: number) {}
  }
   
  type CookingDevice<T> = T extends "grill" ? Grill : Oven
   
  let device1: CookingDevice<"grill">
        
  
  let device2: CookingDevice<"oven">


  


//   Expressing conditions

const one = 1;
const two = 2;
const ten = 10;
 
type IsLowNumber<T> = T extends 1 | 2 ? true : false
type TestOne = IsLowNumber<1>       
// type TestOne = true

type TestTwo = IsLowNumber<2>       
// type TestTwo = true

type TestTen = IsLowNumber<10>       
// type TestTen = false

type TestTenWithTwo = IsLowNumber<10 | 2>  
// type TestTenWithTwo = boolean

/* Let’s look specifically at the conditions, when T is each of our three types

    T = 1 —> { 1 } extends { 1, 2 } —> true
    T = 2 —> { 2 } extends { 1, 2 } —> true
    T = 10 —> { 10 } extends { 1, 2 } —> false
    T = 10 | 2 —> { 10, 2 } extends { 1, 2 } —> boolean
 */

    
/*---------------- Utility types that use conditional types----------- */

// built-in utility types "Extract" and "Exclude", which are implemented with conditional types


/*--------Extract--------*/



type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | { red: number; green: number; blue: number }
 
type StringColors = Extract<FavoriteColors, string>          
// type StringColors = "dark sienna" | "van dyke brown" | "yellow ochre" | "sap green" | "titanium white" | "phthalo green" | "prussian blue" | "cadium yellow"

type ObjectColors = Extract<FavoriteColors, { red: number }>          
// type ObjectColors = {
//     red: number;
//     green: number;
//     blue: number;
// }

type TupleColors
         // type TupleColors = [number, number, number]


  = Extract<FavoriteColors, [number, number, number]>




/*--------Exclude--------*/

// Exclude is the opposite of Extract, in that it’s useful for obtaining the part of a type that’s not assignable to some other type


  // a set of four specific things
/* type FavoriteColors =
| "dark sienna"
| "van dyke brown"
| "yellow ochre"
| "sap green"
| "titanium white"
| "phthalo green"
| "prussian blue"
| "cadium yellow"
| [number, number, number]
| { red: number; green: number; blue: number }

type NonStringColors = Exclude<FavoriteColors, string>
  */


/* How do these work? */

/**
 * Exclude from T those types that are assignable to U
 */
// type Exclude<T, U> = T extends U ? never : T
/**
 * Extract from T those types that are assignable to U
 */
// type Extract<T, U> = T extends U ? T : never



