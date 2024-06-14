/* ------------Mapped Types----------- */

// The basics



type Fruit = {
    name: string
    color: string
    mass: number
  }
   
  type Dict<T> = { [k: string]: T | undefined } // <- index signature
   
  const fruitCatalog: Dict<Fruit> = {}
  fruitCatalog.apple



/* 

  type Fruit = {
    name: string
    color: string
    mass: number
  }
   
  // mapped type
  type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit }
   
  function printFruitCatalog(fruitCatalog: MyRecord) {
    fruitCatalog.cherry
    fruitCatalog.apple
                  
//   (property) apple: Fruit
    fruitCatalog.pineapple
    //Error :-   Property 'pineapple' does not exist on type 'MyRecord'.
 } 
*/

//Record

/* Syntax:
    - type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit }
    + type MyRecord<K extends keyof any, V> = { [Key in K]: V }
 */

    type AnyPossibleKey = keyof any

    type MyRecord<K extends keyof any, V> = { [Key in K]: V }


    /**
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends keyof any, T> = {
//     [P in K]: T
//   }
  

