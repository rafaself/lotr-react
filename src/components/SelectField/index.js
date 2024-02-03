import "./SelectField.css"

const SelectField = (props) => {

    const watchChange = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="select-field">
            <label>{props.label}</label>
            <select value={props.value} onChange={watchChange} required>
                <option value="">Selecione um item</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SelectField;