// Managing a stack

let bookCart = []

const ADD_TO_CART_ACTION = 'addToCard'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart () {
    console.log('Current Cart of books: ', bookCart)
}

function performCartActions (action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            console.log(`Added book: ${newBook}`)
            break
        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0){
                console.log('Cart is empty. No books to remove')
            }
            else{
                const removedBook = bookCart.pop()
                console.log(`Removed book from the cart: ${removedBook}`)
            }
            break
        case VIEW_CART_ACTION:
            viewCart()
            break
        default:
            console.log('Invalid action. Please choose a valid option')
            break
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Think like a monk')
performCartActions(ADD_TO_CART_ACTION, 'New book')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)
performCartActions(VIEW_CART_ACTION)