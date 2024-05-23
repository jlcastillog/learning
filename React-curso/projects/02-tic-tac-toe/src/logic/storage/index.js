export const saveGame = ({board, shift}) => {    
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('shift', shift)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('shift')
}