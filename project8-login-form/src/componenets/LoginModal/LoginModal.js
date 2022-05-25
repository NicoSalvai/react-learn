import './loginmodal.css'
import Input from '../Input/Input'
import React from 'react'

export default function LoginModal(){

    const [form, setForm] = React.useState({
        email: {
            value: "",
            valid: true,
            validate: ((input, prev) => input.length != 0),
            type: "email",
            name: "email",
            placeholder: "Correo electronico",
        },
        username: {
            value: "",
            valid: true,
            validate: ((input, prev) => input.length != 0),
            type: "text",
            name: "username",
            placeholder: "Username",
        },
        password: {
            value: "",
            valid: true,
            validate: ((input, prev) => input.length != 0),
            type: "password",
            name: "password",
            placeholder: "Password",
        },  
        password_repeat: {
            value: "",
            valid: true,
            validate: ((input, prev) => (input.length != 0 && input === prev.password.value)),
            type: "password",
            name: "password_repeat",
            placeholder: "Confirm password",
        },
        subscribe: {
            value: false,
            valid: true,
            validate: ((input, prev) => true),
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
                    valid: prev[name].validate(actualValue, prev)
                }
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        setForm(prev => {
            Object.keys(prev).forEach( key => {
                prev[key].valid = prev[key].validate(prev[key].value, prev)
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