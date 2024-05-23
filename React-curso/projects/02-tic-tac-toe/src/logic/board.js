import { WINNER_COMBOS, SHIFTS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // Check all winner combination to know 
    // if 'x' or 'o' won

    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ) {
        return boardToCheck[a]
        }
    }

    return null
}

export const checkEndGame = (boardToCheck) => {
    // Check is every element is not null
    return boardToCheck.every((square) => square !== null)
}
