import './TextField.css'

const TextField = (props) =>{

    const placeholderModified = `${props.placeholder}...`

    const toTyped = (event) => {
        props.toChanged(event.target.value)
    }
    console.log(props)
    return(
    <div className="text-field">
        <label>{props.label}</label>
        <input value={props.value} onChange={toTyped} required={props.obrigatory} placeholder={placeholderModified}/>
    </div>
    )
}

export default TextField