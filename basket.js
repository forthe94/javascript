"use strict"

function countBasketPrice(basket)
{
    let total = 0;
    var good = 0;
    for (let good in basket)
    {
	total += good[1]
	good++;
    }
    return total;
}


var basket = [];

basket[0] = ['Творог', 50];
basket[1] = ['Сметан', 54];
basket[2] = ['Колбаса', 100];
basket[3] = ['Молоко', 70];
console.log(countBasketPrice(basket));