// Vamos a crear una función que calcule el precio de un producto aplicando un descuento un descuento

function calculateDiscountedPrice (price, discountPercetange){
    return price - ((price * discountPercetange) / 100);
}

console.log(calculateDiscountedPrice(1000, 10))
console.log(calculateDiscountedPrice(1000, 50))
console.log(calculateDiscountedPrice(1000, 0))

const originalPrice = 100
const discountPercetange = 20
const finalPrice = calculateDiscountedPrice(100, 20)

console.log('Original price: $' + originalPrice)
console.log('Discount:' + discountPercetange + '%')
console.log('Final price: $' + finalPrice)