function add(x, y)
{
	return x + y
}
function div(x, y)
{
	return x / y
}
function mult(x, y)
{
	return x * y
}
function sub(x, y)
{
	return x - y
}

function mathOperation(arg1, arg2, op)
{
	switch(op)
	{
		case 'add':
			return add(arg1, arg2);
		case 'div':
			return div(arg1, arg2);
		case 'mult':
			return mult(arg1, arg2);
		case 'sub':
			return sub(arg1, arg2);
	}
}

console.log(mathOperation(2, 4, 'mult'))