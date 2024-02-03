import "./TextField.css"

const TextField = (props) => {

    const watchChange = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.title}</label>
            <input 
                type={props.type}
                value={props.value} 
                onChange={watchChange} 
                required={props.required} 
                placeholder={props.placeholder} 
                pattern={props.pattern}
            />
        </div>
    )
}

export default TextField;