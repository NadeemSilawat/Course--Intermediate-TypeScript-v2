/*-------Generic Constraints-------- */



const phoneList = [
    { customerId: '0001', areaCode: '321', num: '123-4566' },
    { customerId: '0002', areaCode: '174', num: '142-3626' },
    { customerId: '0003', areaCode: '192', num: '012-7190' },
    { customerId: '0005', areaCode: '402', num: '652-5782' },
    { customerId: '0004', areaCode: '301', num: '184-8501' },
]


const phoneDict = {
    '0001': {
        customerId: '0001',
        areaCode: '321',
        num: '123-4566',
    },
    '0002': {
        customerId: '0002',
        areaCode: '174',
        num: '142-3626',
    },
    /*... and so on */
}


function listToDict<T>(
    list: T[], // array as input
    idGen: (arg: T) => string // fn for obtaining item's id
): { [k: string]: T } {
    // create dict to fill
    const dict: { [k: string]: T } = {}

    for (let item of list) {
        // for each item
        dict[idGen(item)] = item // make a key store in dict
    }

    return dict // result
}



/* 
    function listToDict<T>(
        list: T[],
        idGen: (arg: T) => string
    ): { [k: string]: T } {
        return {}
    }

    interface HasId {
        id: string
    }
    interface Dict<T> {
        [k: string]: T
    }
    
    function listToDict(list: HasId[]): Dict<HasId> {
        const dict: Dict<HasId> = {}
    
        list.forEach((item) => {
        dict[item.id] = item
        })
    
        return dict
    }
*/  

/* ------------------------------------------------------------------------- */


/* Describing the constraint */

/* - function listToDict(list: HasId[]): Dict<HasId> {
    + function listToDict<T extends HasId>(list: T[]): Dict<T> {

 */

/* ------------------------------------------------------------------------- */

        /*-----------Scopes and TypeParams---------------- */

        // function receiveFruitBasket(bowl) {
        //     console.log("Thanks for the fruit basket!")
        //     // only `bowl` can be accessed here
        //     eatApple(bowl, (apple) => {
        //       // both `bowl` and `apple` can be accessed here
        //     })
        //   }


/* 
          // outer function
function tupleCreator<T>(first: T) {
    // inner function
    return function finish<S>(last: S): [T, S] {
      return [first, last]
    }
  }
  const finishTuple = tupleCreator(3)
  const t1 = finishTuple(null)
        
  const t1: [number, null]
  const t2 = finishTuple([4, 8, 15, 16, 23, 42])
        
  const t2: [number, number[]]
   */


/* ------------------------------------------------------------------------- */

    /* Practice */

//   Define type parameters as simply as possible. Consider the two options for listToDict:


/* interface HasId {
    id: string
  }
  interface Dict<T> {
    [k: string]: T
  }
   
  function example1<T extends HasId[]>(list: T) {
    return list.pop()
            
  (parameter) list: T extends HasId[]
  }
  function example2<T extends HasId>(list: T[]) {
    return list.pop()
            
  (parameter) list: T[]
  }
   
  class Payment implements HasId {
    static #next_id_counter = 1;
    id = `pmnt_${Payment.#next_id_counter++}`
  }
  class Invoice implements HasId {
    static #next_id_counter = 1;
    id = `invc_${Invoice.#next_id_counter++}`
  }
   
  const result1 = example1([
          
  const result1: HasId | undefined
    new Payment(),
    new Invoice(),
    new Payment()
  ])
   
  const result2 = example2([
          
  const result2: Payment | Invoice | undefined
    new Payment(),
    new Invoice(),
    new Payment()
  ])
 */  