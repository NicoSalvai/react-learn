import './input.css'

export default function Input(props) {
    
    return (
        <input
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            className={props.valid?"custom-input":"custom-input invalid"}
            onChange={props.changeHandler}
        />
    )
}