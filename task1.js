"use strict"

var n = 100;
var cur = 2;
while(cur < n)
{
    let tmp = 2;
    let prime = 1;
//    console.log(tmp)
    while(tmp < cur/2 + 1)
    {
//	console.log(tmp, cur)
//	console.log(cur % tmp)
	if((cur % tmp) == 0)
	{
	    prime = 0;
	    break;
	}
	tmp++;
    }
    if(prime)
    {
	console.log(cur)
    }
    
    cur++;
    
}


