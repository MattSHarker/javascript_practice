class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

// Your code here.
function reliableMultiply(a, b)
{
    // will loop until the return statement executes
    for (;;)    
    {
        try
        {
            // attempt the multiplication
            return primitiveMultiply(a, b);
        }
        catch (e)
        {
            // catches everything but the MultUnitFailure error
            if (!(e instanceof MultiplicatorUnitFailure))
                throw e;
        }
    }  
}

console.log(reliableMultiply(8, 8));
// → 64
