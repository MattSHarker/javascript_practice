// IF-ELSE
// if the conditional is true, execute one section of code, else execute a different one
let x = 15, y = 10;

if (x > y)
{
    console.log(x + " is greater than " + y);
}
else if (x < y)
{
    console.log(x + " is less than " + y);
}
else
{
    console.log(x * " is equal to " + y);
}

// if the resulting executed code is one line, the {} can be omitted
x = 7;
if (x > y)
    console.log(x + " is greater than " + y);
else if (x < y)
    console.log(x + " is less than " + y);
else
    console.log(x * " is equal to " + y);

// and even put onto the same line
x = 10;
if (x > y)      console.log(x + " is greater than " + y);
else if (x < y) console.log(x + " is less than " + y);
else            console.log(x * " is equal to " + y);
// these two formatting rules work basically anywhere, not just if statements


// WHILE LOOPS
// will repeated loop until the conditional is false
let countdown = 10;
while (countdown >= 0)
{
    console.log(countdown);
    countdown--;
}


// DO WHILE LOOPS
// performs the code, THEN checks the conditional
countdown = 10;

// the exact same loop as above, but written differently
do
{
    console.log(countdown);
    countdown--;
}
while (countdown > 0);


// FOR LOOPS
// works the same as any other program's for loop
// the same code as the while and do while loop's code
for (let i = 10; i >= 0; i++)
{
    console.log(i);
}


// BREAK
// exits a loop early when called
let number = 0;
while(true) // will go forever
{
    if (number === 10)
        break;  // will exit the loop when number === 10
    
    number++;
}


// CONTINUE 
// restats a loop early
for (let i = 0; i < 10; ++i)
{
    if (i % 2 === 0)
        continue;   // if i is not evenly divisible by 2, then restat the loop
    
    console.log(i); // this will end up only printing 1, 3, 5, 7, and 9
}


// SWITCH
// conceptually similar to an if-else chain
let s = 3;
switch (s)
{
    case 1:
        // do stuff
        break;
    case 2:
        // do stuff
        break;
    case 3:
        // do stuff
        break;
    case 4:
        // do stuff
        break;
    default:
        // do stuff if none of the cases match the input
        break;
}

// leaving off the break statements will cause fall through
let a = 3;
let b = 1;
switch (a)
{
    case  1: b += 10;
    case  2: b += 9;
    case  3: b += 8;
    case  4: b += 7;
    case  5: b += 6;
    case  6: b += 5;
    case  7: b += 4;
    case  8: b += 3;
    case  9: b += 2;
    case 10: b += 1; break;
    default: b = 0;
}
// b will contain the value 37
// the code will jump to case 3, then continue through case 4, case 5...
// until it executes default or a break statement

