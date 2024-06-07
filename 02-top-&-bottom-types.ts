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

let flexible: unknown = 4
flexible = "Download some more ram"
flexible = window.document
flexible = setTimeout

let myUnknown: unknown = 14
myUnknown.it.is.possible.to.access.any.deep.property
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
