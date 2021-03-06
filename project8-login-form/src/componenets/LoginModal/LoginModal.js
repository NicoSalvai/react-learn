import './loginmodal.css'
import Input from '../Input/Input'
import React from 'react'

export default function LoginModal(){

    const [form, setForm] = React.useState({
        email: {
            value: "",
            error: [],
            validate: [((input, prev) => input.length !== 0 ? "" : "Email should not be empty")],
            type: "email",
            name: "email",
            placeholder: "Correo electronico",
        },
        username: {
            value: "",
            error: [],
            validate: [((input, prev) => input.length !== 0 ? "" : "Username should not be empty")],
            type: "text",
            name: "username",
            placeholder: "Username",
        },
        password: {
            value: "",
            error: [],
            validate: [((input, prev) => input.length !== 0 ? "" : "Password should not be empty")],
            type: "password",
            name: "password",
            placeholder: "Password",
        },  
        password_repeat: {
            value: "",
            error: [],
            validate: [((input, prev) => (input.length !== 0 ? "" : "Password should not be empty")), 
                ((input, prev) => (input === prev.password.value ? "" : "Passwords should match"))],
            type: "password",
            name: "password_repeat",
            placeholder: "Confirm password",
        },
        subscribe: {
            value: false,
            error: [],
            validate: [((input, prev) => "")],
            type: "checkbox",
            name: "subscribe",
            placeholder: "subscribe",
        } 
    })

    function changeHandler(event){
        const {value, name, checked, type} = event.target;
        const actualValue = type==="checkbox"?checked:value
        
        setForm((prev) => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value: actualValue,
                    error: prev[name].validate.map(validator => validator(actualValue, prev)).filter(validator => validator !== "")
                }
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        setForm(prev => {
            Object.keys(prev).forEach( key => {
                prev[key].error = prev[key].error = prev[key].validate.map(validator => validator(prev[key].value, prev)).filter(validator => validator !== "")
            })
            return {
                ...prev,
            };
        })

        if(Object.keys(form).every(key => form[key].error.length === 0)){
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