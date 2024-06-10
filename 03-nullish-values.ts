/* Nullish values */

/* --------null----------- */

/* null means: there is a value, and that value is nothing.
While some people believe that null is not an important part of the 
JS language, I find that it’s useful to express the concept of a “nothing”
 result(kind of like an empty array, but not an array).
 */

 const userInfo = {
    name: "Mike",
    email: "mike@example.com",
    secondaryEmail: null, // user has no secondary email
  }



/* --------undefined----------- */

/* undefined means the value isn’t available (yet?) */

interface FormInProgress {
    createdAt: Date
    data: FormData
    completedAt?: Date
  }
  const formInProgress: FormInProgress = {
    createdAt: new Date(),
    data: new FormData(),
  }
  function submitForm() {
    formInProgress.completedAt = new Date()
  }



/* --------void----------- */

/* void should exclusively be used to describe that a
 function’s return value should be ignored */

 console.log(`console.log returns nothing.`)
        
        // TypeScript log-> : (method) Console.log(...data: any[]): void



/* --------Non-null assertion operator----------- */


/* The non-null assertion operator (!.) is used 
to cast away the possibility that a value might be null or undefined.
*/


type GroceryCart = {
  fruits?: { name: string; qty: number }[]
  vegetables?: { name: string; qty: number }[]
}

const cart: GroceryCart = {}

// cart.fruits.push({ name: "kumkuat", qty: 1 })
//   ^?Error : 'cart.fruits' is possibly 'undefined'.

cart.fruits!.push({ name: "kumkuat", qty: 1 })



/* --------Definite assignment assertion----------- */



/* The definite assignment !: assertion is used to suppress TypeScript’s objections 
about a class field being used, when it can’t be proven1 that it was initialized.
*/

class ThingWithAsyncSetup {
  setupPromise: Promise<any> 
  isSetup: boolean
//  Erorr : Property 'isSetup' has no initializer and is not definitely assigned in the constructor.
 
  constructor() {
    this.setupPromise = new Promise((resolve) => {
      this.isSetup = false
      return this.doSetup(resolve)
    }).then(() => {
      this.isSetup = true
    })
  }
 
  private async doSetup(resolve: (value: unknown) => void) {
    // some async stuff
  }
}


let myThing = new ThingWithAsyncSetup()
myThing.isSetup // what if this isn't assigned yet?
          
// (property) ThingWithAsyncSetup.isSetup: boolean

  