// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// just solve for numbers smaller than 1,000 and don't worry about making it efficient. 
// You won't need to do any crazy math -- think iteration and make the computer do the work. 
// Consider it extra credit to make your solution solve for larger numbers in a way that isn't too slow.

var number = 600851475143;

for (i = 1; i< 1001; i++)
{
	if (number % [i] === 0 )
	{
		x = i;
		console.log(x);
	} 
	
	
}
