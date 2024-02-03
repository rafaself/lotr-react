import "./Button.css"

const Button = (props) => {
    return (
        <button className="my-button">
            {props.children}
        </button>
    )
}

export default Button;