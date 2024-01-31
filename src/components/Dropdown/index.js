import './Dropdown.css'
const Dropdown = (props) => {
    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={event=> props.toChanged(event.target.value)} required={props.required} value={props.value}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown