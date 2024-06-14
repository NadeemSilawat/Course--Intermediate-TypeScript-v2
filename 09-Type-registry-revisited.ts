/* // Assumption -- our user has set up resources like Book and Magazine
//
// returns a Book
// fetchRecord("book", "bk_123")
// // returns a Magazine
// fetchRecord("magazine", "mz_456")
// // maybe should refuse to compile
// fetchRecord("blah", "")



// data/
//   book.ts       // A model for Book records
//   magazine.ts   // A model for Magazine records
// lib/
//   registry.ts   // Our type registry, and a `fetchRecord` function
// index.ts        // Entry point



// You can find it in packages/intermediate-ts-v2/src/10-type-registry-revisited.

// The lib/registry.ts file looks like

export interface DataTypeRegistry {
    // empty by design
  }
  // the "& string" is just a trick to get
  // a nicer tooltip to show you in the next step
  export function fetchRecord(
    arg: keyof DataTypeRegistry & string,
    id: string,
  ) {}

  
 // @filename: data/book.ts
export class Book {
  deweyDecimalNumber(): number {
    return 42
  }
}
declare module "../lib/registry" {
  export interface DataTypeRegistry {
    book: Book
  }
}
// @filename: data/magazine.ts
export class Magazine {
  issueNumber(): number {
    return 42
  }
}
declare module "../lib/registry" {
  export interface DataTypeRegistry {
    magazine: Magazine
  }
}
   */

// import {fetchRecord, DataTypeRegistry} from './lib/registry'
 
// type Foo = keyof DataTypeRegistry & string
     
// type Foo = "book" | "magazine"


/* 

import { fetchRecord, fetchRecords } from './lib/registry'
 
async function main() {
    const myBook = await fetchRecord("book", "book_123")
    const myMagazine = await fetchRecord("magazine", "magazine_123")
    const myBookList = await fetchRecords("book", ["book_123"])
    const myMagazineList = await fetchRecords("magazine", ["magazine_123"])
 
    //@ts-expect-error
    fetchRecord("book", "booooook_123")
    //@ts-expect-error
    fetchRecord("magazine", "mag_123")
    //@ts-expect-error
    fetchRecords("book", ["booooook_123"])
    //@ts-expect-error
    fetchRecords("magazine", ["mag_123"])
}
 */