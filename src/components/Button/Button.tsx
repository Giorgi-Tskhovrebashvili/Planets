import { ButtonType } from "../../types"

const Button = ({onClick, number, linkName}: ButtonType) => {
    return <button onClick={onClick}>{number}<p>{linkName}</p></button>
}

export default Button
