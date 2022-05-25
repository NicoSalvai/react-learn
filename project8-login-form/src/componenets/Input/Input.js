import './input.css'

export default function Input(props) {
    const errors = props.error.map(error => <p className='error' key={error}>*{error}</p>)
    
    return (
        <div className='custom-input-container'>
        <input
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            className={(props.error.length === 0) ?"custom-input":"custom-input invalid"}
            onChange={props.changeHandler}
        />
        {errors}
        </div>
    )
}