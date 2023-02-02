// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
let num =[];
for(i = 0; i<=100; i++) {
    num.push(i);
    let getPrime = (i) => {

        if (i===1)
      {
        return false;
      }
      else if(i === 2)
      {
        return true;
      }
      else
      {
        for(let x = 2; x < i; x++)
        {
          if(i % x === 0)
          {
            return false;
          }
        }
        // return true; 
        num.push(i) ;
      }
      console.log(num);
    }
    getPrime();
}


