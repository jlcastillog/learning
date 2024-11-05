/**
 * This function calcaulates total price of a new order
 * @param {Array} products cartProducts: Array of Objects 
 * @returns {number} Total price 
 */
export const totalPrice = (products) => {
    return products?.reduce((acc, p) => acc + parseInt(p.price), 0)
}