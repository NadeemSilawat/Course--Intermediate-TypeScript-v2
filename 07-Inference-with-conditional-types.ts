/* ----------Type inference in conditional types---------- */
/* 
In the same release where conditional types were added to
 TypeScript a new infer keyword was added as well.This keyword,
 which can only be used in the context of a condition expression
 (within a conditional type declaration) is an important tool for being able 
 to extract out pieces of type information from other types.

*/

/////////////////////////////////////////////////////////////
//////////////////////// NOT EXPORTED ////////////////////////
//////////////////////////////////////////////////////////////
type AppleVarieties = 'fuji' | 'gala' | 'honeycrisp' | 'granny smith';
type OrangeVarieties = 'navel' | 'valencia' | 'blood orange' | 'cara cara';
type Allergies = 'peach' | 'kiwi' | 'strawberry' | 'pineapple';
type Ripeness = 'green' | 'ripe' | 'overripe';
 
type QuantityRange = {
    min: number;
    max: number;
};
 
type FruitOrderItem<Varieties extends string> = {
    variety: Varieties;
    pricePerUnit: number;
    quantity: number;
    totalPrice: number;
};
 
type FruitOrder = {
    apples: FruitOrderItem<AppleVarieties>[];
    oranges: FruitOrderItem<OrangeVarieties>[];
    subtotal: number;
    salesTax: number;
    grandTotal: number;
};
 
type FruitOrderPreferences = {
    apples: {
        preferredVarieties: AppleVarieties[];
        avoidSeeds: boolean;
        organicOnly: boolean;
        ripeness: Ripeness;
        quantity: QuantityRange;
    };
    oranges: {
        preferredVarieties: OrangeVarieties[];
        seedlessOnly: boolean;
        ripeness: Ripeness;
        quantity: QuantityRange;
    };
    allergies: Allergies[];
    prefersLocalProduce: boolean;
};
 
//////////////////////////////////////////////////////////////
////////////////////////// EXPORTED //////////////////////////
//////////////////////////////////////////////////////////////
export function createOrder(prefs: FruitOrderPreferences): FruitOrder {
    console.log(prefs)
    return {
        apples: [],
        oranges: [],
        subtotal: 0.00,
        salesTax: 0.00,
        grandTotal: 0.00,
    }
}



/* import { createOrder } from './fruit-market';

type GetFirstArg<T> = any;
 
const prefs: GetFirstArg<typeof createOrder> = {}
 
createOrder(prefs) */


/*----------The infer keyword--------*/

/**
 * If the type `P` passed in is some kind of `PromiseLike<T>` 
 * (where `T` is a new type param), extract `T` and return it.
 * If `P` is not some subtype of `PromiseLike<any>`, pass the 
 * type `P` straight through and return it 
 */
type UnwrapPromise<P> = P extends PromiseLike<infer T> ? T : P;
 
type test1 = UnwrapPromise<Promise<string>>
// type test1 = string

type test2 = UnwrapPromise<Promise<[string[], number[]]>>
// type test2 = [string[], number[]]

type test3 = UnwrapPromise<number>
// type test3 = number



type OneArgFn<A = any> = (firstArg: A, ..._args: any[]) => void
type GetFirstArg<T extends OneArgFn> 
    = T extends OneArgFn
        ? string[]
        : never;
 
// Test case
function foo(x: string, y: number) {return null}
         
// function foo(x: string, y: number): null
// Should be string[]
type t1 = GetFirstArg<typeof foo>
     
// type t1 = string[]


/*----------Constraints on infer--------*/

type GetFirstStringIshElement<T> = T extends readonly [
    infer S,
    ..._:any[]
  ] ? S : never
   
  const t1 = ["success", 2, 1, 4] as const        
//   const t1: readonly ["success", 2, 1, 4]

  const t2 = [4, 54, 5] as const     
//   const t2: readonly [4, 54, 5]

  let firstT1: GetFirstStringIshElement<typeof t1>
//   let firstT1: "success"

  let firstT2: GetFirstStringIshElement<typeof t2>
        
//   let firstT2: 4
  


// type GetFirstStringIshElement<T> = T extends readonly [
//     infer S extends string,
//     ..._:any[]
//   ] ? S : never
   
//   const t1 = ["success", 2, 1, 4] as const
//   const t2 = [4, 54, 5] as const
   
//   let firstT1: GetFirstStringIshElement<typeof t1>
        
//   let firstT1: "success"
//   let firstT2: GetFirstStringIshElement<typeof t2>