
/* ------------Variance over type params------------- */

// Covariance


// We start out with two kinds of machines

// snackProducer - which makes Pretzels and Cookiess at random
// cookieProducer - which makes only Cookies



/* interface Producer<T> {
    produce: () => T;
  }
  let cookieProducer: Producer<Cookie> = {
    produce: () => new Cookie('dark')
  };
   
  const COOKIE_TO_PRETZEL_RATIO = 0.5
   
  let snackProducer: Producer<Snack> = {
    produce: () => Math.random() > COOKIE_TO_PRETZEL_RATIO
      ? new Cookie("milk")
      : new Pretzel(true)
  };
   */




/*
     Cookie	            direction       	        Snack

    Cookie	-           -- is a --->	            Snack
    Producer<Cookie>	--- is a --->       	Producer<Snack>
 */