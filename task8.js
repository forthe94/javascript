function power(val, pow)
{
	if(pow == 0)
		return 1;
	else
		return val * power(val, pow - 1)
}


console.log(power(2,0))