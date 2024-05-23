import { Square } from "./Square"
import { SHIFTS } from '../constants'

export const ShiftPanel = ({shift}) => {
    return (
        <section className='shift'>
            <Square isSelected={shift === SHIFTS.X}>
                {SHIFTS.X}
            </Square>
            <Square isSelected={shift === SHIFTS.O}>
                {SHIFTS.O}
            </Square>
        </section>
    )
}