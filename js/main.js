"use strict"

function Basket() {
    this.goods = []
    this.add_good = function(good_name, price) {
	this.goods.push({
	    name : good_name,
	    price : price
	});
    }

    this.get_sum = function() {
	let sum = 0
	for (let i = 0; i < this.goods.length; i++) {
	    sum += this.goods[i].price
	}
	return sum
    }
}

var basket = new Basket();

function drawBoard() {
    const paragraph = document.getElementById("basket_sum")
    var count = basket.goods.length
    paragraph.innerHTML = `You have ${count} goods is basket. Total price ${basket.get_sum()} $`;

}

const goods_container = document.querySelector('#goods_container');

const goods_list = [ [ "apple", 50 ], [ "bread", 9 ], [ "butter", 3 ],
	[ "meat", 39 ], [ "milk", 55 ] ]
goods_container.addEventListener('click', function(e) {
    const index = Number(e.target.dataset.id);
    console.log(index);
    basket.add_good(goods_list[index][0], goods_list[index][1])
    drawBoard();
})

drawBoard();
