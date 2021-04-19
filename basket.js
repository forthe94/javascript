"use strict"

function Basket()
{
    this.goods = []
    this.add_good = function(good_name, price)
    {
	this.goods.push({name: good_name, price: price});
    }
    
    this.get_sum = function()
    {
	let sum = 0
	for(let i = 0; i < this.goods.length;i++)
	    {
	    	sum += this.goods[i].price
	    }
	return sum
    }
}

var basket = new Basket();

basket.add_good("Яблоко", 100);
basket.add_good("Тыква", 25);
basket.add_good("Морковь", 45);
basket.add_good("Свекла", 66);
basket.add_good("Молоко", 123);

console.log(basket.get_sum())