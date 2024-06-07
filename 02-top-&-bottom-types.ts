// Top types

/* A top type (symbol: ⊤) is a type that describes any possible value allowed by the system.  */

// TypeScript provides two of these types: any and unknown.


/* any */
/* 
let flexible: any = 4
flexible = "Download some more ram"
flexible = window.document
flexible = setTimeout      


flexible.it.is.possible.to.access.any.deep.property

console.log(window, Promise, setTimeout, "foo")
 */


/* unknown */
// Like any, unknown can accept any value that is possible to create in JavaScript:

/* let flexible: unknown = 4
flexible = "Download some more ram"
flexible = window.document
flexible = setTimeout

let myUnknown: unknown = 14
// myUnknown.it.is.possible.to.access.any.deep.property
// Error: Object is of type 'unknown'.


// This code runs for myUnknown = { all possible values }
if (typeof myUnknown === "string") {
    // This code runs for myUnknown = { all strings }

    let myUnknown: string
} else if (typeof myUnknown === "number") {
    // This code runs for myUnknown = { all numbers }


    let myUnknown: number
} else {


    let myUnknown: unknown
    // this would run for "the leftovers"
    //       myUnknown = { anything except string or numbers }
}


 */


/* ----------------------- */


// function doSomethingRisky() {
//     if (Math.random() > 0.5) return "ok"
//     else if (Math.random() > 0.5) throw new Error("Bad luck!")
//     else throw "Really bad luck"
// }

// try {
//     doSomethingRisky()
// } catch (e: unknown) {
//     if (e instanceof Error) {
//         e
//         // var e: Error

//     } else if (typeof e === 'string') {
//         e
//         // var e: string

//     } else {
//         // Last resort
//         console.error(e)

//         var e: unknown
//     }
// }

function doSomethingRisky() {
  if (Math.random() > 0.5) return "ok"
  else if (Math.random() > 0.5) throw new Error("Bad luck!")
  else throw "Really bad luck"
}

try {
  doSomethingRisky()
} catch (err) {
  //  var err: unknown

}

console.log(doSomethingRisky());


        /* Almost top type: object */
/* 
        let val: object = { status: "ok" }
        val = "foo"
       // Type 'string' is not assignable to type 'object'.
        val = null
        // Type 'null' is not assignable to type 'object'.
        val = () => "ok"
         
        // The type of this value cannot be modeled by an interface
        let response:
               
                    // let response: {
                    //     success: string;
                    //     data: unknown;
                    // } | {
                    //     error: string;
                    //     code: number;
                    // }
            { success: string, data: unknown }
          | { error: string, code: number }
              = { success: "ok", data: [] }
         
        val = response        
         */

        /* Almost top type: {} */
// The empty object type {} represents the set { all possible values, except for null and undefined }

/* 
const stringOrNumber: string | number = 4
let nullableString: string | null = null
const myObj: {
  a?: number
  b: string
} = { b: "foo" }
 
 
let val2: {} = 4
val2 = "abc"
val2 = new Date()
val2 = stringOrNumber
val2 = nullableString
// Type 'null' is not assignable to type '{}'.
val2 = myObj.a
/* Type 'number | undefined' is not assignable to type '{}'.
  Type 'undefined' is not assignable to type '{}'. */






  /* let withoutUndefined: {} | null = 37
let withUndefined: {} | null | undefined = 38
let anUnknown: unknown = "42"
  */

/* withoutUndefined = anUnknown // ❌
// Type 'unknown' is not assignable to type '{} | null'.

withUndefined = anUnknown // ✅
 */

// type NullableStringOrNumber = string | number | null | undefined;
// type StringOrNumber = NullableStringOrNumber & {}




            /* Bottom type: never */

/* A bottom type(symbol: ⊥) is a type that describes no possible 
    value allowed by the system.To use our set theory mental model, 
    we could describe this as a type representing the set { } (intentionally empty). 
*/

function obtainRandomVehicle(): any {
  return {} as any
}
/// ---cut---
class Car {
  drive() {
    console.log("vroom")
  }
}
class Truck {
  tow() {
    console.log("dragging something")
  }
}

type Vehicle = Truck | Car 

let myVehicle: Vehicle = obtainRandomVehicle()

// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car
} else {
  // NEITHER!
  const neverValue: never = myVehicle
}







