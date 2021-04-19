"use strict"

function Num(num)
{
    this.units = num % 10;
    num = Math.floor(num/10);
    this.tens = num % 10;
    num = Math.floor(num/10);
    this.hundreds = num % 10;
    
}

console.log(new Num(345))