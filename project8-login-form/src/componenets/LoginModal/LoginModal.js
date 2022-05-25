import './loginmodal.css'
import Input from '../Input/Input'
import React from 'react'

export default function LoginModal(){

    const [form, setForm] = React.useState({
        email: {
            value: "",
            valid: true,
            error: [],
            validate: [((input, prev) => input.length !== 0 ? "" : "Email should not be empty")],
            type: "email",
            name: "email",
            placeholder: "Correo electronico",
        },
        username: {
            value: "",
            valid: true,
            error: [],
            validate: [((input, prev) => input.length !== 0 ? "" : "Username should not be empty")],
            type: "text",
            name: "username",
            placeholder: "Username",
        },
        password: {
            value: "",
            valid: true,
            error: [],
            validate: [((input, prev) => input.length !== 0 ? "" : "Password should not be empty")],
            type: "password",
            name: "password",
            placeholder: "Password",
        },  
        password_repeat: {
            value: "",
            valid: true,
            error: [],
            validate: [((input, prev) => (input.length !== 0 ? "" : "Password should not be empty")), 
                ((input, prev) => (input === prev.password.value ? "" : "Passwords should match"))],
            type: "password",
            name: "password_repeat",
            placeholder: "Confirm password",
        },
        subscribe: {
            value: false,
            valid: true,
            error: [],
            validate: [((input, prev) => true)],
            type: "checkbox",
            name: "subscribe",
            placeholder: "subscribe",
        } 
    })

    function changeHandler(event){
        const {value, name, checked, type} = event.target;
        const actualValue = type==="checkbox"?checked:value
        
        setForm((prev) => {
            const errors = prev[name].validate.map(validator => validator(actualValue, prev)).filter(validator => validator !== "")
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value: actualValue,
                    valid: (errors.length === 0),
                    error: errors
                }
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        setForm(prev => {
            Object.keys(prev).forEach( key => {
                const errors = prev[key].error = prev[key].validate.map(validator => validator(prev[key].value, prev)).filter(validator => validator !== "")
                prev[key].valid = (errors.length === 0)
                prev[key].error = errors
            })
            return {
                ...prev,
            };
        })

        if(Object.keys(form).every(key => form[key].valid)){
            console.log("submitted")
            console.log(form)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                {...form.email}
                changeHandler={changeHandler}
            />
            <Input
                {...form.username}
                changeHandler={changeHandler}
            />
            <Input
                {...form.password}
                changeHandler={changeHandler}
            />
            <Input
                {...form.password_repeat}
                changeHandler={changeHandler}
            />
            <div className="subscribe-group">
                <input
                    type={form.subscribe.type}
                    name={form.subscribe.name}
                    id={form.subscribe.name}
                    checked={form.subscribe.value}
                    onChange={changeHandler}
                />
                <label>I want to join the newsletter</label>
            </div>
            <button>Sign in</button>
        </form>
    )
}